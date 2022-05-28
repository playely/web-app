import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.scss']
})
export class LinkDeviceComponent implements OnInit {

  deviceForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LinkDeviceComponent>) {
    this.deviceForm = this.formBuilder.group({
      code: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  linkDevice(): void {
    console.log('device code: ', this.deviceForm.value);
    this.dialogRef.close();
  }
}
