import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { filter, map, mergeMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { mockRoutes } from '@mocks/routes.mock';
import { IRoute } from '@models/IRoute';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, RouterModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  routes: IRoute[] = mockRoutes;
  showNavbar = false;
  showFooter = false;
  navbarMode: 'gradient' | 'solid' = 'gradient';
  menuOpened = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      this.navbarMode = window.scrollY > element?.clientHeight ? 'solid' : 'gradient';
    }

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.activatedRoute)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((event: any) => {
      this.showFooter = !event.hideFooter;
      this.showNavbar = !event.hideNavbar;
    });
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
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
}
