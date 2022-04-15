import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private authService: AuthService
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
      rememberme: [false]
    });
   }

  ngOnInit(): void {
  }

  /**
   * Handle login form submit
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).then(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  /**
   * Handle formGroup error
   *
   * @param controlName control form name
   * @param errorName error name by validators
   * @returns 
   */
  handleError (controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].touched && this.loginForm.controls[controlName].hasError(errorName);
  }
}
