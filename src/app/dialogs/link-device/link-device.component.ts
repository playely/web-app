import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-link-device',
  templateUrl: './link-device.component.html',
  styleUrls: ['./link-device.component.scss']
})
export class LinkDeviceComponent implements OnInit {

  deviceForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.deviceForm = this.formBuilder.group({
      device: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

}
