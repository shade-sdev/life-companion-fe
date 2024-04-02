import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {Notification} from "../../models/common/alert-model";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() notification: Notification | undefined;

  @Output() dismiss = new EventEmitter();

  onDismiss() {
    this.dismiss.emit();
  }
}
