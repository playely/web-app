import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../language/language.service';
import { AvailableLanguages } from '../language/models/language';
import { ITab } from './models/tab.model';
import { enMenu, esMenu } from './options';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private selectedTab: ITab | undefined;
  private tabs: ITab[] | undefined;
  constructor(private title: Title, private languageService: LanguageService) {
  }

  /**
   * Get all tab options
   *
   * @returns all tabs
   */
  getTabs(force?:boolean): Promise<ITab[]> {
    if (this.tabs && !force) {
      return Promise.resolve(this.tabs);
    }
    if (this.languageService.getCurrentLanguage().key === AvailableLanguages.EN) {
      this.tabs = enMenu;
      return Promise.resolve(enMenu);
    } else {
      this.tabs = esMenu;
      return Promise.resolve(esMenu);
    }
  }

  /**
   * Set selected tab
   *
   * @param tab selected
   */
  setSelectedTab(tab: ITab): void {
    this.selectedTab = tab;
    this.title.setTitle(tab.title);
  }

  /**
   * Get selected tab
   *
   * @returns selected tab
   */
  getSelectedTab(): ITab | undefined {
    return this.selectedTab;
  }
}
