import {Component} from '@angular/core';
import {DataTableGridComponent} from "../../../shared/components/data-table-grid/data-table-grid.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    DataTableGridComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
