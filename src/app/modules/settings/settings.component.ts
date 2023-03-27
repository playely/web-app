import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUserInfo, UserLoginMethod } from 'src/app/services/user/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { DialogService } from '../dialogs/dialog.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: IUserInfo | undefined;

  get fullNumber() {
    return `+${this.user?.country.numberCode} ${this.user?.phone}`
  }
  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private router: Router, 
    private dialogService: DialogService
    ) { }

  ngOnInit(): void {
    this.userService.getUserInfo().then((response) => {
      this.user = response;
    });
  }

  handleLoginMethodChange(method: UserLoginMethod): void {
    if (this.user) {
      this.user.loginMethod = method;
    }
  }

  /**
   * Open edit user dialog
   */
  editUser(): void {
    this.dialogService.openEditUser(this.user);
  }

  /**
   * open link device dialog
   */
  linkDevice(): void {
    this.dialogService.openLinkDeviceDialog();
  }

  /**
   * Manage logout
   */
  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/home']);
    });
  }

}
