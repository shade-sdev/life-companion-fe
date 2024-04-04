import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenuComponent} from "../context-menu/context-menu.component";
import {CheckedContextMenuComponent} from "../checked-context-menu/checked-context-menu.component";
import {Header, SearchType} from "../../models/common/table-model";
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {CheckedContextMenu} from "../../models/common/checked-context-menu";
import {PageNavigate} from "../../models/common/pageable";

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
export class DataTableGridComponent {

  protected readonly SearchType = SearchType;

  public checkedRows: Array<any> = [];

  protected selectAll: boolean = false;

  @Input()
  headers: Array<Header> = [];

  @Input()
  data: Array<any> = []

  @Input()
  criteria: any;

  @Input()
  pageSize: number = 10;

  @Input()
  maxPageNumber: number = 0;

  pageNumber: number = 0;

  @Output()
  protected checkedRowsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output()
  protected filterEmitter: EventEmitter<PageNavigate> = new EventEmitter<PageNavigate>();

  @Output()
  scrolledToBottom: EventEmitter<PageNavigate> = new EventEmitter<PageNavigate>();

  private bottomReached = false;

  protected onEnumFilter(id: string, value: Array<CheckedContextMenu<any>>) {
    this.criteria[id] = value.map(it => it.value);
    this.resetPageNavigate();
    this.filterEmitter.emit({pageSize: this.pageSize, pageNumber: this.pageNumber});
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
    this.filterEmitter.emit({pageSize: this.pageSize, pageNumber: this.pageNumber});
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollTop + target.clientHeight;
    const maxScroll = target.scrollHeight;
    const scrollThreshold = 50;

    if (!this.bottomReached && maxScroll - scrollPosition < scrollThreshold) {
      this.bottomReached = true;

      if (this.maxPageNumber >= this.pageNumber && this.data.length != 0) {
        this.pageNumber = this.pageNumber + 1;
        this.scrolledToBottom.emit({pageSize: this.pageSize, pageNumber: this.pageNumber});
      }

    } else if (maxScroll - scrollPosition >= scrollThreshold) {
      this.bottomReached = false;
    }
  }

  protected resetPageNavigate() {
    this.pageNumber = 0;
    this.pageSize = 10;
  }

  protected contextMenuToInputField(menus: CheckedContextMenu<any>[]) {
    return menus.map(value => value?.name ?? value).join(', ');
  }

}
