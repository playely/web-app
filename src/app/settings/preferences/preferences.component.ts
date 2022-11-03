import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LanguageService } from 'src/app/services/language/language.service';
import { ILanguage } from 'src/app/services/language/models/language';
import { UserLoginMethod } from 'src/app/services/user/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  @Output() loginMethodChange = new EventEmitter<UserLoginMethod>();
  loginEmailControl: UntypedFormControl;
  loginOTPControl: UntypedFormControl;
  languageControl: UntypedFormControl;
  languagesList: ILanguage[] = [];
  constructor(private userService: UserService, private languageService: LanguageService) {
    this.languagesList = this.languageService.getAvailableLanguages();
    const currentLanguage = this.languageService.getCurrentLanguage();
    this.loginEmailControl = new UntypedFormControl(true);
    this.loginOTPControl = new UntypedFormControl(false);
    this.languageControl = new UntypedFormControl(currentLanguage.key);
    this.userService.getUserPreferences().then((response) => {
      this.updateLoginMethods(true,response.loginMethod);
    });
   }

   get LoginMethod() {
    return UserLoginMethod;
  }

  ngOnInit(): void {
  }

  /**
   * Handle login method change
   * @param event 
   * @param method 
   */
  handleTogleChange(event: MatSlideToggleChange, method: UserLoginMethod): void {
    this.updateLoginMethods(event.checked, method);
    const currentMethod = this.loginEmailControl.value ? UserLoginMethod.EMAIL : UserLoginMethod.OTP;
    this.loginMethodChange.emit(currentMethod);
    this.userService.updatePreferences({
      loginMethod: currentMethod
    });
  }

  /**
   * Handle language change
   * @param event 
   */
  handleLanguageChange(event:  MatSelectChange): void {
    this.languageService.changeLanguage(event.value);
  }

  /**
   * Manage login method toggle
   *
   * @param value true or false
   * @param method User logn method
   */
  private updateLoginMethods(value: boolean, method: UserLoginMethod): void {
    if (method === UserLoginMethod.EMAIL) {
      this.loginEmailControl.setValue(value);
      this.loginOTPControl.setValue(!value);
    } else {
      this.loginOTPControl.setValue(value);
      this.loginEmailControl.setValue(!value);
    }
  }
}
