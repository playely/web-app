import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.newPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.min(5)]],
      confirmPassword: ['', [Validators.required, Validators.min(5)]]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.saveNewPassword('', '').then(() => {
      this.router.navigate(['/auth/login']);
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
    return this.newPasswordForm.controls[controlName].touched && this.newPasswordForm.controls[controlName].hasError(errorName);
  }
}
