import { Injectable } from '@angular/core';
import { AppService } from '../app-service/app.service';
import { StorageKeys } from '../storage/storage-items';
import { StorageService } from '../storage/storage.service';
import { LoginRequest, LoginResponse } from './models/login';
import { RegisterRequest } from './models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService, private appService: AppService) { }

  get isUserAuthenticated(): boolean {
    return this.storageService.getLocalItem(StorageKeys.AUTH_TOKEN) !== null;
  }

  /**
   * Register user
   *
   * @param data 
   * @returns 
   */
  register(data: RegisterRequest): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Handle login http request 
   *
   * @param request 
   * @returns 
   */
  login(request: LoginRequest, rememberUser: boolean): Promise<LoginResponse> {
    const response = {
      email: 'test@text.com',
      image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
      name: 'John Smith',
      token: 'dfwefwefwefwefewfwefewfwe',
      id: '123423232',
    };
    this.storageService.setLocalItem(StorageKeys.AUTH_TOKEN,response.token);
    this.storageService.setLocalItem(StorageKeys.AUTH_USER, JSON.stringify(response));
    this.storageService.setLocalItem(StorageKeys.SILENT_LOGIN, rememberUser);
    this.appService.changeSession({
      email: response.email,
      image: response.image,
      name: response.name,
      id: response.id,
    });
    return Promise.resolve(response);
  }

  logout(): Promise<void> {
    this.appService.changeSession(null);
    this.storageService.removeLocalItem(StorageKeys.AUTH_TOKEN);
    this.storageService.removeLocalItem(StorageKeys.AUTH_USER);
    return Promise.resolve();
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
}
