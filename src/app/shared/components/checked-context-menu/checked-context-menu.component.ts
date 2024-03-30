import {Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal} from '@angular/core';
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

  public selectAll: boolean = false;

  public checkedRows: Array<any> = [];

  public override shown: WritableSignal<boolean> = signal(false);

  @Input() position!: string;

  @Input() override elementId!: string;

  @Input() override triggerId!: string;

  @Input() key!: string;

  @Input() items!: Array<any>;

  @Input() translateKey!: string;

  @Output() checkedRowsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  menuItems: Array<CheckedContextMenu<any>> = [];

  constructor(private translateService: TranslateService) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.init(this.shown, this.elementId, this.triggerId);

    for (const value of this.items) {
      this.menuItems?.push({
        key: this.key,
        name: await this.translate(value),
        value: value,
      });
    }
  }

  onCheckboxChange(event: any, row: CheckedContextMenu<any>) {
    if (row.value == ALL.ALL) {
      this.selectAll = event.target.checked;
      this.checkedRows = this.selectAll ? [ALL.ALL] : [];
    } else {
      if (event.target.checked) {
        this.checkedRows.push(row);
      } else {
        const index = this.checkedRows.indexOf(row);
        if (index !== -1) {
          this.checkedRows.splice(index, 1);
        }
      }
    }
    this.checkedRowsEmitter.emit(this.checkedRows);
  }

  private async translate(value: any): Promise<string> {
    if (value == ALL.ALL) {
      return await lastValueFrom(this.translateService.get('modules.common.types.ALL'));
    }
    return await lastValueFrom(this.translateService.get(`${this.translateKey}${value}`));
  }

}
