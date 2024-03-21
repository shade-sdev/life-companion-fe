import { Component } from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {SideBarService} from "../../../services/side-bar.service";
import {Sidebar} from "../../../models/sidebar-model";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    NgIcon,
    NgOptimizedImage,
    NgForOf,
    NgClass,
    RouterLink
  ],
  providers: [SideBarService],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  public readonly sideBar: Sidebar;

  public constructor(private sideBarService: SideBarService) {
    this.sideBar = this.sideBarService.getSideBarItems();
  }

}
