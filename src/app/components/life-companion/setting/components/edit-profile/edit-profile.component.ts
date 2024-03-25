import {Component, signal, WritableSignal} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {FormUtil} from "../../../../../shared/form/form-util";
import {
  FormErrorMessageComponent
} from "../../../../../shared/components/form-error-message/form-error-message.component";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    NgIcon,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    FormErrorMessageComponent
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  public formUtil: FormUtil

  public editProfileFormGroup: FormGroup;
  public formSubmitted: WritableSignal<boolean> = signal(false);

  constructor(private formBuilder: FormBuilder) {
    this.editProfileFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.formUtil = FormUtil.of(this.editProfileFormGroup, this.formSubmitted);
  }

  public submit() {
    this?.formSubmitted.set(true);
  }

}
