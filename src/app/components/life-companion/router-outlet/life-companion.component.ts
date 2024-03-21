import { Component } from '@angular/core';
import {NavBarComponent} from "../../../shared/components/navbar/nav-bar/nav-bar.component";
import {SideBarComponent} from "../../../shared/components/sidebar/side-bar/side-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-life-companion',
  standalone: true,
  imports: [
    NavBarComponent,
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './life-companion.component.html',
  styleUrl: './life-companion.component.css'
})
export class LifeCompanionComponent {

}
