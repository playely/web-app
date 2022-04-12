import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showNavbar = false;
  showFooter = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('player')) {
          this.showFooter = false;
          this.showNavbar = false;
        } else {
          this.showFooter = true;
          this.showNavbar = true;
        }
      }
    });
  }
}
