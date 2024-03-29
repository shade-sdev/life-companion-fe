import {Component} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-data-table-grid',
  standalone: true,
  imports: [
    NgIcon,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './data-table-grid.component.html',
  styleUrl: './data-table-grid.component.css'
})
export class DataTableGridComponent {

}
