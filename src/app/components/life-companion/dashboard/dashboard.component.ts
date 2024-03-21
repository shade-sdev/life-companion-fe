import { Component } from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {SideBarComponent} from "../../../shared/components/sidebar/side-bar/side-bar.component";
import {NavBarComponent} from "../../../shared/components/navbar/nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIcon,
    SideBarComponent,
    NavBarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
