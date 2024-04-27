import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function strongPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigit = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    const valid = hasUpperCase && hasLowerCase && hasDigit && hasSpecial;

    return valid ? null : { strongPassword: true };
  };
}

export function matchPassword() : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('passwordConfirmation')?.value;

    if (password !== confirmPassword) {
      control.get('passwordConfirmation')?.setErrors({ matchPassword: true });
      return { matchPassword: true };
    } else {
      return null;
    }
  };
}
