import {Component} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {AlertComponent} from "../alert/alert.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-alert-container',
  standalone: true,
  imports: [
    AlertComponent,
    AsyncPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './alert-container.component.html',
  styleUrl: './alert-container.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class AlertContainerComponent {
  constructor(public alertService: AlertService) {
  }
}
