import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AvailableLanguages, ILanguage } from './models/language';
import { StorageService } from '../storage/storage.service';
import { StorageKeys } from '../storage/storage-items';
import { AppService } from '../app-service/app.service';
import { isLanguageAvailable } from '../../utils/language-utils';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages: ILanguage[] = [
    {
      key: AvailableLanguages.EN,
      name: 'English',
    },
    {
      key: AvailableLanguages.ES,
      name: 'Español'
    },
  ];
  constructor(
    private translateService: TranslateService,
    private storageService: StorageService,
    private appService: AppService
    ) {
  }

  init(): void {
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    const currentLanguage = this.storageService.getLocalItem(StorageKeys.LANG);
    if (currentLanguage && isLanguageAvailable(currentLanguage)) {
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
    const language = this.languages.find((lg) => lg.key === key) || this.languages[0];
    this.translateService.use(key).toPromise().then(() => {
      this.storageService.setLocalItem(StorageKeys.LANG, key);
      this.appService.changeLanguage(language);
    });    
  }
}
