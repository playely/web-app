import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

/**
 * Validates if the password and confirm password fields match
 *
 * @param password 
 * @param confirmPassword 
 * @returns 
 */
export const passwordMatch = (password: string, confirmPassword: string): ValidatorFn => {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['passwordMismatch']
    ) {
      return null;
    }
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}

/**
 * Checks for errors in a form control
 *
 * @param form 
 * @param formControlName 
 * @param controlName 
 * @returns error message
 */
export const getErrorMessage = (form: FormGroup, formControlName: string, controlName?: string): string => {
  controlName = controlName || formControlName;
  const formControl = form.get(formControlName);
  if (!formControl) return '';
  if (formControl.hasError('required')) {
    return controlName + ' is required';
  }
  if (formControl.hasError('email')) {
    return controlName + ' is not an email';
  }
  if (formControl.hasError('minlength')) {
    return controlName + ' must be at least 6 characters long';
  }
  if (formControl.hasError('passwordMismatch')) {
    return 'Passwords do not match';
  }
  return ''
}