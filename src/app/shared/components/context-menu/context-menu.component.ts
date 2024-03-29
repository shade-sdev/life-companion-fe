import {Component, Input, signal, WritableSignal} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ContextMenus, MenuItemType} from "../../models/context-menu-model";
import {RouterLink} from "@angular/router";
import {ContextMenuUtil} from "../../models/context-menu-util";

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [
    NgIcon,
    NgClass,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.css'
})
export class ContextMenuComponent extends ContextMenuUtil {

  protected readonly MenuItemType = MenuItemType;

  public override shown: WritableSignal<boolean> = signal(false);

  @Input() isChecked?: WritableSignal<boolean> | undefined;

  @Input() override elementId!: string;

  @Input() override triggerId!: string;

  @Input() menu!: ContextMenus;

  constructor() {
    super();
    this.init(this.shown, this.elementId, this.triggerId);
  }


}
