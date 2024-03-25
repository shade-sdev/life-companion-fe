import {Component, Input} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {NgClass, NgIf} from "@angular/common";
import {FormUtil} from "../../form/form-util";

@Component({
  selector: 'app-form-error-message',
  standalone: true,
  imports: [
    NgIcon,
    NgIf,
    NgClass
  ],
  templateUrl: './form-error-message.component.html',
  styleUrl: './form-error-message.component.css'
})
export class FormErrorMessageComponent {

  @Input() formUtil!: FormUtil;

  @Input() fieldName!: string

}
