import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  signIn(email: string, password: string) {
    const isLocalUser = email === 'user@playely.com' && password.includes('play123456');
    if (isLocalUser) {
      localStorage.setItem('user', JSON.stringify({ email, password, name: 'User' }));
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
}
