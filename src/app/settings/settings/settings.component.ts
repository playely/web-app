import { Component, OnInit } from '@angular/core';
import { IUserInfoResponse } from 'src/app/services/user/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: IUserInfoResponse | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserInfo().then((response) => {
      this.user = response;
    });
  }

}
