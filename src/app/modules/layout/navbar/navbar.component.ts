import { Component, HostListener, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/app-base.component';
import { AppService } from 'src/app/services/app-service/app.service';
import { UserSession } from 'src/app/services/auth/models/login';
import { ITab } from 'src/app/services/tabs/models/tab.model';
import { TabService } from 'src/app/services/tabs/tab.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent implements OnInit {
  @Input() isCover: boolean = false;
  userInfo: UserSession | null;

  menuItems: ITab[] = [];
  constructor(private tabService: TabService, private appService: AppService) {
    super();
    this.userInfo = null;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar-container') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  ngOnInit(): void {
    this.getTabs();
    this.appService.getSession()
      .pipe(takeUntil(this.destroy$))
      .subscribe((info) => {
        this.userInfo = info;
      });
    this.appService.getLanguageChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        if (language) {
          this.getTabs(true);
        }
      })
  }

  /**
   * Get all tabs form service
   */
  getTabs(force?: boolean): void {
    this.tabService.getTabs(force).then((tabs) => {
      this.menuItems = tabs;
    });
  }

  /**
   * Select tab on service
   * @param tab 
   */
  selectTab(tab: ITab): void {
    this.tabService.setSelectedTab(tab);
  }

}
