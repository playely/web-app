import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from "rxjs/operators";
import { TabService } from './services/tabs/tab.service';
interface IconRegistry {
  label: string;
  url: string;
}

const icons:IconRegistry[] = [
  {
    label: 'facebook',
    url: 'assets/img/svg/social-media/facebook.svg'
  },
  {
    label: 'instagram',
    url: 'assets/img/svg/social-media/instagram.svg'
  },
  {
    label: 'google',
    url: 'assets/img/svg/social-media/google-brands.svg'
  },
  {
    label: 'twitter',
    url: 'assets/img/svg/social-media/twitter-brands.svg'
  },
  {
    label: 'microsoft',
    url: 'assets/img/svg/social-media/windows-brands.svg'
  }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showNavbar = false;
  showFooter = false;
  isContentPage = false;
  isCover = false;
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private tabService: TabService
    ) {}

  ngOnInit(): void {
    this.registerIcons();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.activatedRoute)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((event: any) => {
      this.showFooter = !event.hideFooter;
      this.showNavbar = !event.hideNavbar;
      this.isContentPage = event.isContentPage;
      this.isCover = event.cover;
      // this.scrollToTop();
    });
  }

  scrollToTop() {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }

  /**
   * Find the last activated route
   *
   * @param route 
   * @returns 
   */
  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private registerIcons(): void {
    icons.forEach(element => {
      this.matIconRegistry.addSvgIcon(
        element.label,
        this.domSanitizer.bypassSecurityTrustResourceUrl(element.url)
      );
    });
    this.tabService.getTabs().then((tabs) => {
      tabs.forEach(element => {
        this.matIconRegistry.addSvgIcon(
          element.title_en,
          this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/svg/menu/${element.title_en}.svg`)
        );
      });
    });
  }
}
