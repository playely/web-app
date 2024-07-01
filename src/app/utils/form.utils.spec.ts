import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatch, getErrorMessage } from './form.utils';

describe('FormUtils', () => {
    let form: FormGroup;

    beforeEach(() => {
        form = new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
            email: new FormControl('', [Validators.required, Validators.email]),
        }, { validators: passwordMatch('password', 'confirmPassword') });
    });

    it('should return an error message when password do not have the min length', () => {
        form.get('password')?.setValue('pass');
        expect(getErrorMessage(form, 'password')).toBe('password must be at least 6 characters long');
    });

    it('should return an error message when passwords do not match', () => {
        form.get('password')?.setValue('password123');
        form.get('confirmPassword')?.setValue('differentpassword');
        expect(getErrorMessage(form, 'confirmPassword')).toBe('Passwords do not match');
    });

    it('should return an empty string when there are no errors', () => {
        form.get('password')?.setValue('password123');
        form.get('confirmPassword')?.setValue('password123');
        expect(getErrorMessage(form, 'confirmPassword')).toBe('');
    });

    it('should return an error message when email is invalid', () => {
        form.get('email')?.setValue('invalidemail');
        expect(getErrorMessage(form, 'email')).toBe('email is not an email');
    });

    it('should return null if the control is not found', () => {
        form = new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
        }, { validators: passwordMatch('password', 'confirmpassword') });
        expect(getErrorMessage(form, 'confirmPassword')).toBe('confirmPassword is required');
        expect(getErrorMessage(form, 'confirmpassword')).toBe('');
    });
});