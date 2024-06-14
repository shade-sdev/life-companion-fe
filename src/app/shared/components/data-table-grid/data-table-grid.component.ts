import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenuComponent} from "../context-menu/context-menu.component";
import {CheckedContextMenuComponent} from "../checked-context-menu/checked-context-menu.component";
import {Header, SearchType} from "../../models/common/table-model";
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {CheckedContextMenu} from "../../models/common/checked-context-menu";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-data-table-grid',
  standalone: true,
  imports: [
    NgIcon,
    FormsModule,
    ReactiveFormsModule,
    ContextMenuComponent,
    CheckedContextMenuComponent,
    NgForOf,
    NgIf,
    TranslateModule
  ],
  templateUrl: './data-table-grid.component.html',
  styleUrl: './data-table-grid.component.css'
})
export class DataTableGridComponent implements OnDestroy, OnInit {

  protected readonly SearchType = SearchType;

  @Input()
  public headers: Array<Header> = [];

  @Input()
  public criteria!: any;

  @Input()
  public pageSize: number = 10;

  @Input() public loadDataFunction!: (criteria: any) => Observable<any>;

  @Output()
  protected checkedRowsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  public checkedRows: Array<any> = [];

  protected data: Array<any> = []

  protected selectAll: boolean = false;

  protected totalElements: number = 0;

  protected numberOfElements: number = 0;

  protected pageNumber: number = 0;

  private maxPageNumber: number | undefined = 0;

  private bottomReached = false;

  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.loadData()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public loadData() {
    const updatedCriteria = {
      ...this.criteria,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    };
    if (this.loadDataFunction) {
      this.subscription = this.loadDataFunction(updatedCriteria)
        .subscribe({
          next: value => {
            this.data = [...this.data, ...value.elements];
            this.totalElements = value.totalElements;
            this.maxPageNumber = value.totalPages;
            this.numberOfElements = value.numberOfElements;
          }
        });
    } else {
      console.error('No loadDataFunction provided');
    }
  }

  protected onEnumFilter(id: string, value: Array<CheckedContextMenu<any>>) {
    this.criteria[id] = value.map(it => it.value);
    this.resetPageNavigate();
  }

  protected onCheckboxChange(event: any, row: any) {
    if (row === null) {
      this.selectAll = event.target.checked;
      this.checkedRows = this.selectAll ? [...this.data] : [];
    } else {
      if (event.target.checked) {
        this.checkedRows.push(row);
      } else {
        const index = this.checkedRows.indexOf(row);
        if (index !== -1) {
          this.checkedRows.splice(index, 1);
        }
      }
    }
    this.checkedRowsEmitter.emit(this.checkedRows);
  }

  protected onTextChange(id: string, input: any) {
    this.criteria[id] = input;
    this.resetPageNavigate();
  }

  protected resetPageNavigate() {
    this.pageNumber = 0;
    this.pageSize = 10;
    this.data = [];
    this.loadData();
  }

  protected contextMenuToInputField(menus: CheckedContextMenu<any>[]) {
    console.log(menus)
    return menus.map(value => value?.name ?? value).join(', ');
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollTop + target.clientHeight;
    const maxScroll = target.scrollHeight;

    const baseThreshold = 50;
    const viewportHeight = window.innerHeight;
    const scaleFactor = viewportHeight / 1080;
    const scrollThreshold = baseThreshold * scaleFactor + 10;
    const thresholdCondition = maxScroll - scrollPosition <= scrollThreshold;

    if (!this.bottomReached && thresholdCondition) {
      this.bottomReached = true;
      if (this.maxPageNumber! > this.pageNumber) {
        this.pageNumber += 1;
        this.loadData();
      }
    } else if (maxScroll - scrollPosition > scrollThreshold) {
      this.bottomReached = false;
    }
  }

}
