import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.scss']
})
export class LinkDeviceComponent implements OnInit {

  codeForm: FormGroup;
  constructor( public dialogRef: MatDialogRef<LinkDeviceComponent>, private formBuilder: FormBuilder) {
    this.codeForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  linkDevice(): void {
    if (this.codeForm.valid) {
      console.log('device code: ', this.codeForm.value);
    this.dialogRef.close();
    }
  }
}
