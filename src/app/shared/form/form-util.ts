import {FormGroup} from "@angular/forms";
import {WritableSignal} from "@angular/core";

export class FormUtil {

  formGroup: FormGroup;
  formSubmitted: WritableSignal<boolean>;

  public static of(formGroup: FormGroup, formSubmitted: WritableSignal<boolean>): FormUtil {
    return new FormUtil(formGroup, formSubmitted);
  }

  constructor(formGroup: FormGroup, formSubmitted: WritableSignal<boolean>) {
    this.formGroup = formGroup;
    this.formSubmitted = formSubmitted;
  }

  getInputBorderClass(formControlName: string): { [key: string]: boolean } {
    const isUnTouched = this.isFormPropertyUnTouched(formControlName);
    const isError = this.isFormPropertyError(formControlName);

    return {
      'border-gray-300 dark:border-[#1b1c20]': isUnTouched,
      'border-red-700': isError,
      'border-green-800': !isUnTouched && !isError
    };
  }

  getErrorMessageClass(formControlName: string): { [key: string]: boolean } {
    const isError = this.isFormPropertyError(formControlName);

    return {
      'text-green-700': !isError,
      'text-red-700': isError,
    };
  }

  getErrorMessage(formControlName: string): (() => string) | undefined | string {
    let formControlErrors = this.formGroup?.get(formControlName)?.errors;
    if (formControlErrors?.["required"]) {
      return 'This field is required';
    }

    if (formControlErrors?.["email"]) {
      return 'Invalid email';
    }

    return 'Field is valid.';
  }

  getErrorMessageIcon(formControlName: string): string {
    const isError = this.isFormPropertyError(formControlName);
    return isError ? 'heroXCircle' : 'heroCheckCircle';
  }

  isFormPropertyUnTouched(formControlName: string): boolean {
    let formControl = this.formGroup?.get(formControlName);
    return (!this?.formSubmitted() && !formControl?.dirty)
  }

  isFormPropertyError(formControlName: string): boolean {
    let formControl = this.formGroup?.get(formControlName);
    return ((this?.formSubmitted() || formControl?.dirty) && formControl?.invalid) ?? false;
  }

}
