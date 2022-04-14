import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKeys } from '../storage/storage-items';
import { StorageService } from '../storage/storage.service';
import { LoginRequest, LoginResponse, UserSession } from './models/login';

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

  /**
   * Handle login http request 
   *
   * @param request 
   * @returns 
   */
  login(request: LoginRequest): Promise<LoginResponse> {
    const response = {
      email: 'test@text.com',
      image: 'https://placeholder.com/150',
      name: 'John Smith',
      token: 'dfwefwefwefwefewfwefewfwe',
    };
    this.storageService.setLocalItem(StorageKeys.AUTHTOKEN,response.token);
    this.storageService.setLocalItem(StorageKeys.AUTHUSER, JSON.stringify(response));
    return Promise.resolve(response);
  }

  private getUserSession(): UserSession {
    return this.storageService.getLocalItem(StorageKeys.AUTHUSER) ? 
    JSON.parse(this.storageService.getLocalItem(StorageKeys.AUTHUSER)) : null;
  }
}
