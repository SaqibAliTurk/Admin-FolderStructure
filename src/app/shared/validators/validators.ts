import { AbstractControl, ValidatorFn } from '@angular/forms';

// validator to validate if the input date doesn't exceed the current date
export function ValidateCurrentDate(
  control: AbstractControl
): { invalidCurrentDate: boolean } | null {
  const currentDate = new Date();
  const date = new Date(control.value);
  return date > currentDate ? { invalidCurrentDate: true } : null;
}

// validate the acquired grade input
export function ValidateGradingSystem(gradingSystem: string): ValidatorFn {
  return (
    control: AbstractControl
  ): { invalidGrade: boolean } | { gradeUnselected: boolean } | null => {
    console.log('INSIDE VALIDATE GRADING SYSTEM CONTROL', control.value);
    console.log('INSIDE VALIDATE GRADING SYSTEM STRING', gradingSystem);

    // regex for letter grading
    const letter_regex = /^[a-f]+$/;

    const letter_regex_sign = /^[a-f]{1}[+-]$/;

    // validating gpa grading system
    const number_regex = /^[0-9]+$/;

    console.log(letter_regex.test(control.value));

    if (gradingSystem === '') {
      console.log('grade unselected');
      return { gradeUnselected: true };
    } else if (
      gradingSystem === 'GPA grading' &&
      (control.value % 1 === 0 ||
        !(control.value >= 1.0 && control.value <= 5.0))
    ) {
      return { invalidGrade: true };
    }
    // validating marks and percentage grading system
    else if (
      ((gradingSystem === 'Percentage grading' ||
        gradingSystem === 'Marks grading') &&
        !number_regex.test(control.value)) ||
      control.value > 100 ||
      control.value < 0
    ) {
      return { invalidGrade: true };
    }
    // validating letter grading system
    else if (
      gradingSystem === 'Letter grading' &&
      !letter_regex.test(control.value) &&
      !letter_regex_sign.test(control.value)
    ) {
      return { invalidGrade: true };
    }

    console.log('bypassed all the checks');
    return null;
  };
}

// validator to validate if the input doesnt contain any special characters

export function ValidateAlphanumerals(
  control: AbstractControl
): { invalidAlphanumeral: boolean } | null {
  const regex = /^[a-z0-9]+$/i;
  return !regex.test(control.value) ? { invalidAlphanumeral: true } : null;
}

// validator to validate if the input is only characters and not numbers
export function ValidateString(
  control: AbstractControl
): { invalidString: boolean } | null {
  const regex = /^[a-zA-Z]+$/;

  return control.value && !regex.test(control.value)
    ? { invalidString: true }
    : null;
}

// validator to validate number
export function ValidateNumber(
  control: AbstractControl
): { invalidNumber: boolean } | null {
  const regex = /^[0-9]+$/;

  return control.value && !regex.test(control.value)
    ? { invalidNumber: true }
    : null;
}

// validate the length of an input
export function ValidateLength(length: number): ValidatorFn {
  return (control: AbstractControl): { invalidLength: boolean } | null => {
    return control.value && control.value.length !== length
      ? { invalidLength: true }
      : null;
  };
}

// validate phone number
export function ValidatePhoneCode(
  control: AbstractControl
): { invalidCode: boolean } | null {
  return !control.value.startsWith('+') ? { invalidCode: true } : null;
}
