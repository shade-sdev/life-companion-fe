import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlertContainerComponent} from "../../shared/components/alert-container/alert-container.component";
import {AlertComponent} from "../../shared/components/alert/alert.component";
import {AlertService} from "../../shared/services/alert.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertContainerComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-companion-fe';
  constructor(public alertService: AlertService) {
  }

}
