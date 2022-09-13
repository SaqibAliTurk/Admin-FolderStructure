import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function ConfirmedValidator(controlName: any, matchingControlName: any) {
  return (formGroup: FormGroup) => {
    // console.log('confirmed validator', controlName, matchingControlName);
    const control = formGroup.controls[controlName];

    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function MatchValues(value: string): ValidatorFn {
  return (control: AbstractControl): { invalidMatch: boolean } | null => {
    if (control.value !== value) {
      return { invalidMatch: true };
    }
    return null;
  };
}
