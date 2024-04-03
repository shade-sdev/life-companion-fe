import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenuComponent} from "../context-menu/context-menu.component";
import {CheckedContextMenuComponent} from "../checked-context-menu/checked-context-menu.component";
import {Header, SearchType} from "../../models/common/table-model";
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {CheckedContextMenu} from "../../models/common/checked-context-menu";

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

  @Output()
  protected checkedRowsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output()
  protected filterEmitter: EventEmitter<void> = new EventEmitter<void>();

  protected onEnumFilter(id: string, value: Array<CheckedContextMenu<any>>) {
    this.criteria[id] = value.map(it => it.value);
    this.filterEmitter.emit()
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
    this.filterEmitter.emit();
  }

  protected contextMenuToInputField(menus: CheckedContextMenu<any>[]) {
    return menus.map(value => value?.name ?? value).join(', ');
  }

}
