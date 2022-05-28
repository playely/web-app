import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UserLoginMethod } from 'src/app/services/user/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  @Output() loginMethodChange = new EventEmitter<UserLoginMethod>();
  loginEmailForm: FormControl;
  loginOTPForm: FormControl;
  constructor(private userService: UserService) {
    this.loginEmailForm = new FormControl(true);
    this.loginOTPForm = new FormControl(false);
    this.userService.getUserPreferences().then((response) => {
      this.updateLoginMethods(true,response.loginMethod);
    });
   }

   get LoginMethod() {
    return UserLoginMethod;
  }

  ngOnInit(): void {
  }

  handleTogleChange(event: MatSlideToggleChange, method: UserLoginMethod): void {
    this.updateLoginMethods(event.checked, method);
    const currentMethod = this.loginEmailForm.value ? UserLoginMethod.EMAIL : UserLoginMethod.OTP;
    this.loginMethodChange.emit(currentMethod);
    this.userService.updatePreferences({
      loginMethod: currentMethod
    });
  }

  /**
   * Manage login method toggle
   *
   * @param value true or false
   * @param method User logn method
   */
  private updateLoginMethods(value: boolean, method: UserLoginMethod): void {
    if (method === UserLoginMethod.EMAIL) {
      this.loginEmailForm.setValue(value);
      this.loginOTPForm.setValue(!value);
    } else {
      this.loginOTPForm.setValue(value);
      this.loginEmailForm.setValue(!value);
    }
  }
}
