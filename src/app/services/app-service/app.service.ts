import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserSession } from '../auth/models/login';
import { StorageKeys } from '../storage/storage-items';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  session = new BehaviorSubject<UserSession|null>(this.getUserSession());

  constructor(private storageService: StorageService) { }

    /**
   * Get Session Observable
   *
   * @returns 
   */
     getSessionOb(): Observable<UserSession|null> {
      return this.session.asObservable();
    }
  
    /**
     * Fire session bs change
     *
     * @param value 
     */
    changeSession(value: UserSession | null): void {
      this.session.next(value);
    }

    
  private getUserSession(): UserSession {
    return this.storageService.getLocalItem(StorageKeys.AUTHUSER) ? 
    JSON.parse(this.storageService.getLocalItem(StorageKeys.AUTHUSER)) : null;
  }
}
