import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userSubject = new BehaviorSubject<IUser | undefined>(this.getUserFromStorage());

  get userChange() {
    return this._userSubject.asObservable();
  }

  constructor() { }

  signIn(email: string, password: string) {
    const isLocalUser = email === 'user@playely.com' && password.includes('play123456');
    if (isLocalUser) {
      localStorage.setItem('user', JSON.stringify({ email, password, name: 'User' }));
      this._userSubject.next({ email, name: 'User', id: '1' });
    }
    return isLocalUser;
  }

  signUp(email: string, password: string, name: string) {
    if (email !== 'user@playely.com') {
      localStorage.setItem('user', JSON.stringify({ email, password, name }));
    }
    return email !== 'user@playely.com';
  }

  resetPassword(email: string) {
    return true;
  }

  setNewPassword(uid: string, password: string) {
    return true;
  }

  logout() {
    localStorage.removeItem('user');
    this._userSubject.next(undefined);
  }

  private getUserFromStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }
}
