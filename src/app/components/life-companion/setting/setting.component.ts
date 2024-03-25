import {Component} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    NgIcon,
    EditProfileComponent
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
