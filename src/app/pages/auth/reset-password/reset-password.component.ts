import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { passwordMatch, getErrorMessage } from '@utils/form.utils';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatInputModule, RouterModule, MatIconModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  keepSnakBar = false;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private snackBar: MatSnackBar,
     private userService: UserService,
     private route: ActivatedRoute
    ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: passwordMatch('password', 'confirmPassword') });
  }

  ngOnInit(): void {
    // get the reset password token and verify if is valid
    if (!this.route.snapshot.queryParams['rpwtk']) {
      this.keepSnakBar = true;
      this.snackBar.open('Invalid reset password token.', 'ok', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: 'error-snackbar'
      });
      this.router.navigate(['/auth']);
    }
  }

  ngOnDestroy(): void {
    if (!this.keepSnakBar) this.snackBar.dismiss();
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const { password } = this.resetPasswordForm.value;
      const successful = this.userService.setNewPassword(this.route.snapshot.queryParams['rpwtk'], password);
      if (successful){
        this.snackBar.open('Password updated.', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2000,
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

  checkForErrorsIn(formControlName: string, controlName?: string): string {
    return getErrorMessage(this.resetPasswordForm, formControlName, controlName);
  }
}
