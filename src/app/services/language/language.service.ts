import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
  }

  init(): void {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }
}
