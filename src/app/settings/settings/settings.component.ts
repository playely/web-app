import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUserInfoResponse } from 'src/app/services/user/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: IUserInfoResponse | undefined;
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserInfo().then((response) => {
      this.user = response;
    });
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
