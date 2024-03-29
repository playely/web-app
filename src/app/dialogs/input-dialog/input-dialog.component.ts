import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceType } from 'src/app/services/devices/models/devices';

export interface InputDialogData {
  title: string;
  placeholder: string;
  btnText: string;
  type: DeviceType;
  value?: string;
}

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {
  inputForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: InputDialogData, private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      value: [data.value],
    });
  }

  get DeviceType() {
    return DeviceType;
  }
  
  ngOnInit(): void {
  }

}
