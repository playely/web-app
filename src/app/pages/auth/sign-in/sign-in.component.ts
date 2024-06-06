import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { UserService } from '@services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { getErrorMessage } from '@utils/form.utils';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatInputModule, RouterModule, MatSnackBarModule, MatIconModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnDestroy {
  signInForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private userService: UserService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy(): void {
    this.snackBar.dismiss();
  }

  /**
   * Submit form and sign in user
   */
  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      const successful = this.userService.signIn(email, password);
      if (successful){
        this.router.navigate(['/']);
      } else {
        this.snackBar.open('Invalid email or password', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: 'error-snackbar'
        });
      }
    }
  }

  /**
   * Get error message for form control
   * @param formControlName 
   * @returns 
   */
  checkForErrorsIn(formControlName: string): string {
    return getErrorMessage(this.signInForm, formControlName);
  }

  /**
   * Fill form with demo credentials
   */
  fillform() {
    this.signInForm.setValue({
      email: 'user@playely.com',
      password: 'play123456'
  });
}
}
