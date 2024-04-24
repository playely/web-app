import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter, map, mergeMap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showNavbar = false;
  showFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,  private title: Title){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.activatedRoute)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((event: any) => {
      this.showFooter = !event.hideFooter;
      this.showNavbar = !event.hideNavbar;
      if (event.title) {
        this.title.setTitle(event.title);
      }
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
}
