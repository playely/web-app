import { Injectable } from '@angular/core';
import { IUserInfo, IUserPreferences, UserLoginMethod } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUserInfo(): Promise<IUserInfo> {
    return Promise.resolve({
      email: 'test@text.com',
      image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
      name: 'John Smith',
      token: 'dfwefwefwefwefewfwefewfwe',
      id: '123423232',
      phone: '53365889',
      country: {
        code: 'GT',
        name: 'Guatemala',
        numberCode: '502'
      },
      loginMethod: UserLoginMethod.OTP,
      subscriptions: [],
    });
  }

  getUserPreferences(): Promise<IUserPreferences> {
    return Promise.resolve({
      loginMethod: UserLoginMethod.OTP,
    });
  }

  updatePreferences(pref: IUserPreferences): Promise<void> {
    return Promise.resolve();
  }
}
