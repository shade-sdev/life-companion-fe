import {Component} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenuComponent} from "../context-menu/context-menu.component";
import {CheckedContextMenuComponent} from "../checked-context-menu/checked-context-menu.component";
import {CheckedContextMenu} from "../../models/checked-context-menu";

@Component({
  selector: 'app-data-table-grid',
  standalone: true,
  imports: [
    NgIcon,
    FormsModule,
    ReactiveFormsModule,
    ContextMenuComponent,
    CheckedContextMenuComponent
  ],
  templateUrl: './data-table-grid.component.html',
  styleUrl: './data-table-grid.component.css'
})
export class DataTableGridComponent {

  menu: Array<CheckedContextMenu<any>> = [
    {
      name: "Settings",
      checked: false
    },
    {
      name: "Profile",
      checked: false
    }
  ]

}
