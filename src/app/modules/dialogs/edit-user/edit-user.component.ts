import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserLoginMethod } from 'src/app/services/user/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: UntypedFormGroup;
  passwordForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder, private dialogRef: MatDialogRef<EditUserComponent>) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.pattern(/[0-9]+/)]],
      gender: [0],
    });
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  editUser(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.dialogRef.close();
    }
  }

  changePassword(): void {
    if (this.passwordForm.valid) {
      console.log(this.passwordForm.value);
      this.dialogRef.close();
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
    return this.userForm.controls[controlName].touched && this.userForm.controls[controlName].hasError(errorName);
  }

  /**
   * Handle formGroup error
   *
   * @param controlName control form name
   * @param errorName error name by validators
   * @returns 
   */
   handlePwdError (controlName: string, errorName: string): boolean {
    return this.passwordForm.controls[controlName].touched && this.passwordForm.controls[controlName].hasError(errorName);
  }
}
