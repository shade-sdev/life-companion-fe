import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {CheckedContextMenu} from "../../models/checked-context-menu";
import {ContextMenuUtil} from "../../models/context-menu-util";
import {ALL} from "../../models/table-model";
import {TranslateService} from "@ngx-translate/core";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-checked-context-menu',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
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

  @Input() translateKey!: string;

  menuItems: Array<CheckedContextMenu<any>> = [];

  constructor(private translateService: TranslateService) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.init(this.shown, this.elementId, this.triggerId);

    for (const value of this.items) {
      this.menuItems?.push({
        name: await this.translate(value),
        value: value,
        checked: value == ALL
      });
    }
  }

  private async translate(value: any): Promise<string> {
    if (value == ALL.ALL) {
      return await lastValueFrom(this.translateService.get('modules.common.types.ALL'));
    }
    return await lastValueFrom(this.translateService.get(`${this.translateKey}${value}`));
  }

}
