import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { getErrorMessage } from '@utils/form.utils';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatInputModule, RouterModule, MatIconModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  fPasswordForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private userService: UserService) {
    this.fPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnDestroy(): void {
    this.snackBar.dismiss();
  }

  onSubmit() {
    if (this.fPasswordForm.valid) {
      const { email } = this.fPasswordForm.value;
      const successful = this.userService.resetPassword(email);
      if (successful){
        this.snackBar.open('We sent you a reset password link.', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'success-snackbar'
        }).afterDismissed().subscribe(() => {
          this.router.navigate(['/auth']);
        });
      } else {
        this.snackBar.open('Unable to reset your password.', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: 'error-snackbar'
        });
      }
    }
  }

  checkForErrorsIn(formControlName: string): string {
    return getErrorMessage(this.fPasswordForm, formControlName);
  }
}
