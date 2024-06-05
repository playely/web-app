import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { getErrorMessage, passwordMatch } from '@utils/form.utils';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatInputModule, RouterModule, MatIconModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnDestroy {
  signUpForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private userService: UserService) {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: passwordMatch('password', 'confirmPassword') });
  }

  ngOnDestroy(): void {
    this.snackBar.dismiss();
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { email, password, name } = this.signUpForm.value;
      const successful = this.userService.signUp(email, password, name);
      if (successful){
        this.router.navigate(['/']);
      } else {
        this.snackBar.open('Unable to create a new account', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: 'error-snackbar'
        });
      }
    }
  }

  checkForErrorsIn(formControlName: string, controlName?: string): string {
    return getErrorMessage(this.signUpForm, formControlName, controlName);
  }
}
