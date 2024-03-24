import {Component, HostListener, Input, WritableSignal} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ContextMenus, MenuItemType} from "../../models/context-menu-model";

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [
    NgIcon,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.css'
})
export class ContextMenuComponent {

  protected readonly MenuItemType = MenuItemType;

  @Input() isShown!: WritableSignal<boolean>;

  @Input() isChecked: WritableSignal<boolean> | undefined;

  @Input() id!: string;

  @Input() triggerId!: string;

  @Input() menu!: ContextMenus;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const ulElement = document.getElementById(this.id);
    const triggerElement = document.getElementById(this.triggerId);

    if (!(triggerElement && triggerElement?.contains(clickedElement)) && !(ulElement?.contains(clickedElement))) {
      this.isShown.set(false);
    }
  }

}
