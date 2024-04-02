import {Component, Input, signal, WritableSignal} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {NgClass} from "@angular/common";
import {ContextMenus, MenuItemType} from "../../models/common/context-menu-model";
import {ContextMenuComponent} from "../context-menu/context-menu.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgIcon,
    NgClass,
    ContextMenuComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public profileOptionsOpen: WritableSignal<boolean> = signal<boolean>(false);

  @Input() darkMode: WritableSignal<boolean> | undefined;

  profileMenu: ContextMenus = {
    menus: [
      {
        name: 'My Profile',
        type: MenuItemType.LINK,
        iconName: 'heroUser',
      },
      {
        name: 'Setting',
        type: MenuItemType.LINK,
        iconName: 'heroCog8Tooth',
        link: '/setting'
      },
      {
        name: 'Sign out',
        type: MenuItemType.LINK,
        iconName: 'heroArrowRightEndOnRectangle',
      },
      {
        id: 'darkModeToggle',
        name: 'Theme',
        type: MenuItemType.CHECKBOX,
        action: () => {
          this.darkMode?.set(!this.darkMode())
        }
      }
    ]
  };


}
