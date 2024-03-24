import {Component, signal, WritableSignal} from '@angular/core';
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
import {SideBarComponent} from "../../../shared/components/side-bar/side-bar.component";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-life-companion',
  standalone: true,
  imports: [
    NavBarComponent,
    SideBarComponent,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './life-companion.component.html',
  styleUrl: './life-companion.component.css'
})
export class LifeCompanionComponent {

  public darkMode: WritableSignal<boolean> = signal<boolean>(true);

}
