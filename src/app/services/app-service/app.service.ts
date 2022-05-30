import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserSession } from '../auth/models/login';
import { ILanguage } from '../language/models/language';
import { StorageKeys } from '../storage/storage-items';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  session = new BehaviorSubject<UserSession | null>(this.getUserSession());
  languageChange = new BehaviorSubject<ILanguage | null>(null);
  constructor(private storageService: StorageService) { }

  /**
 * Get Session Observable
 *
 * @returns 
 */
  getSession(): Observable<UserSession | null> {
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

  /**
   * Get language change observable
   * @returns 
   */
  getLanguageChange(): Observable<ILanguage | null> {
    return this.languageChange.asObservable();
  }

  /**
   * Fire change language
   * @param language 
   */
  changeLanguage(language: ILanguage) {
    this.languageChange.next(language);
  }

  private getUserSession(): UserSession {
    return this.storageService.getLocalItem(StorageKeys.AUTH_USER) ?
      JSON.parse(this.storageService.getLocalItem(StorageKeys.AUTH_USER)) : null;
  }
}
