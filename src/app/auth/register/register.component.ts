import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: UntypedFormGroup;
  registered = false;
  
  constructor(
    private formBuilder: UntypedFormBuilder, 
    private router: Router, 
    private authService: AuthService
    ) {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
      confirmPassword: ['', [Validators.required, Validators.min(5)]],
      agreeTC: [false]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.registerForm.value).then(() => {
      this.registered = true;
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
      return this.registerForm.controls[controlName].touched && this.registerForm.controls[controlName].hasError(errorName);
    }
}
