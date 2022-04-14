import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.resetPassword(this.resetPasswordForm.value.email).then(() => {
      this.router.navigate(['/home']);
    });
  }

  /**
   * Handle formGroup error
   *
   * @param controlName control form name
   * @param errorName error name by validators
   * @returns 
   */
   handleError (controlName: string, errorName: string): boolean {
    return this.resetPasswordForm.controls[controlName].touched && this.resetPasswordForm.controls[controlName].hasError(errorName);
  }
}
