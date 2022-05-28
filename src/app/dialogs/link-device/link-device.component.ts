import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.scss']
})
export class LinkDeviceComponent implements OnInit {

  deviceCode: FormControl;
  constructor( public dialogRef: MatDialogRef<LinkDeviceComponent>) {
    this.deviceCode = new FormControl();
   }

  ngOnInit(): void {
  }

  linkDevice(): void {
    console.log('device code: ', this.deviceCode.value);
    this.dialogRef.close();
  }
}
