import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITab } from './models/tab.model';
import { menu } from './options';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private selectedTab: ITab | undefined;
  constructor(private title: Title) {
  }

  /**
   * Get all tab options
   *
   * @returns all tabs
   */
  getTabs(): Promise<ITab[]> {
    return Promise.resolve(menu);
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
