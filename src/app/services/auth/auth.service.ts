import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKeys } from '../storage/storage-items';
import { StorageService } from '../storage/storage.service';
import { LoginRequest, LoginResponse, UserSession } from './models/login';
import { RegisterRequest } from './models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session = new BehaviorSubject<UserSession>(this.getUserSession());

  constructor(private storageService: StorageService) { }

  /**
   * Get Session Observable
   *
   * @returns 
   */
  getSessionOb(): Observable<UserSession> {
    return this.session.asObservable();
  }

  /**
   * Fire session bs change
   *
   * @param value 
   */
  changeSession(value: UserSession): void {
    this.session.next(value);
  }

  register(data: RegisterRequest): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Handle login http request 
   *
   * @param request 
   * @returns 
   */
  login(request: LoginRequest): Promise<LoginResponse> {
    const response = {
      email: 'test@text.com',
      image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
      name: 'John Smith',
      token: 'dfwefwefwefwefewfwefewfwe',
      id: '123423232',
    };
    this.storageService.setLocalItem(StorageKeys.AUTHTOKEN,response.token);
    this.storageService.setLocalItem(StorageKeys.AUTHUSER, JSON.stringify(response));
    return Promise.resolve(response);
  }

  /**
   * Reset password by email 
   *
   * @param email 
   * @returns 
   */
  resetPassword(email: string): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Save new password 
   *
   * @param email 
   * @returns 
   */
   saveNewPassword(newPassword: string, validationCode: string): Promise<void> {
    return Promise.resolve();
  }

  private getUserSession(): UserSession {
    return this.storageService.getLocalItem(StorageKeys.AUTHUSER) ? 
    JSON.parse(this.storageService.getLocalItem(StorageKeys.AUTHUSER)) : null;
  }
}