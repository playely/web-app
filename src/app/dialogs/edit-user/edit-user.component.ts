import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<EditUserComponent>) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.pattern(/[0-9]+/)]]
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
}
