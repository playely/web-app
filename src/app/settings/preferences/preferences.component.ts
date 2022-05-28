import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UserLoginMethod } from 'src/app/services/user/models/user';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  loginEmailForm: FormControl;
  loginOTPForm: FormControl;
  constructor() {
    this.loginEmailForm = new FormControl(true);
    this.loginOTPForm = new FormControl(false);
   }

   get LoginMethod() {
    return UserLoginMethod;
  }

  ngOnInit(): void {
  }

  handleTogleChange(event: MatSlideToggleChange, method: UserLoginMethod): void {
    if (method === UserLoginMethod.EMAIL) {
      this.loginEmailForm.setValue(event.checked);
      this.loginOTPForm.setValue(!event.checked);
    } else {
      this.loginOTPForm.setValue(event.checked);
      this.loginEmailForm.setValue(!event.checked);
    }
  }
}
