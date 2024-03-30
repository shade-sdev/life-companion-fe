import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {CheckedContextMenu} from "../../models/checked-context-menu";
import {ContextMenuUtil} from "../../models/context-menu-util";
import {DefaultEnum} from "../../models/table-model";

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
export class CheckedContextMenuComponent extends ContextMenuUtil implements OnInit {

  public override shown: WritableSignal<boolean> = signal(false);

  @Input() position!: string;

  @Input() override elementId!: string;

  @Input() override triggerId!: string;

  @Input() items!: Array<any>;

  menuItems: Array<CheckedContextMenu<any>> = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.init(this.shown, this.elementId, this.triggerId);

    this.items?.filter((value: any) => typeof value != 'number')
      .forEach(value => {
        this.menuItems?.push({
          name: value,
          value: value.value,
          checked: value.value == DefaultEnum
        });
      });
  }

}
