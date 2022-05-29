import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from './models/language';
import { StorageService } from '../storage/storage.service';
import { StorageKeys } from '../storage/storage-items';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages: ILanguage[] = [
    {
      key: 'en',
      name: 'English',
    },
    {
      key: 'es',
      name: 'Español'
    },
  ];
  constructor(private translateService: TranslateService, private storageService: StorageService) {
  }

  init(): void {
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    const currentLanguage = this.storageService.getLocalItem(StorageKeys.LANG);
    if (currentLanguage) {
      this.translateService.use(currentLanguage);
    }
  }

  /**
   * Get all the available languages
   *
   * @returns 
   */
  getAvailableLanguages(): ILanguage[] {
    return this.languages;
  }

  /**
   * Get current language
   * @returns 
   */
  getCurrentLanguage(): ILanguage {
    const element = this.translateService.currentLang ? this.translateService.currentLang : this.translateService.defaultLang;
    return this.languages.find((lg) => lg.key === element) || this.languages[0];
  }

  /**
   * Update language application
   * @param key 
   */
  changeLanguage(key: string): void {
    this.translateService.use(key);
    this.storageService.setLocalItem(StorageKeys.LANG, key);
  }
}
