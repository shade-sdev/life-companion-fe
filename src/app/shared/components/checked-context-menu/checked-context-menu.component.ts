import {Component, Input, signal, WritableSignal} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {CheckedContextMenu} from "../../models/checked-context-menu";
import {ContextMenuUtil} from "../../models/context-menu-util";

@Component({
  selector: 'app-checked-context-menu',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './checked-context-menu.component.html',
  styleUrl: './checked-context-menu.component.css'
})
export class CheckedContextMenuComponent extends ContextMenuUtil {

  public override shown: WritableSignal<boolean> = signal(false);

  @Input() position!: string;

  @Input() override elementId!: string;

  @Input() override triggerId!: string;

  @Input() items!: Array<CheckedContextMenu<any>>

  constructor() {
    super();
    this.init(this.shown, this.elementId, this.triggerId);
  }

}
