import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenuComponent} from "../context-menu/context-menu.component";
import {CheckedContextMenuComponent} from "../checked-context-menu/checked-context-menu.component";
import {Header, SearchType} from "../../models/table-model";
import {NgForOf, NgIf} from "@angular/common";

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
    NgIf
  ],
  templateUrl: './data-table-grid.component.html',
  styleUrl: './data-table-grid.component.css'
})
export class DataTableGridComponent {

  protected readonly SearchType = SearchType;

  public selectAll: boolean = false;

  public checkedRows: Array<any> = [];

  @Input() headers: Array<Header> = [];

  @Input() data: Array<any> = []

  @Output() checkedRowsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  onCheckboxChange(event: any, row: any) {
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

}
