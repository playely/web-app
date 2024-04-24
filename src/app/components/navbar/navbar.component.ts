import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mockRoutes } from '@mocks/routes.mock';
import { IRoute } from '@models/IRoute';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  routes: IRoute[] = mockRoutes;
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.scrollY > element.clientHeight + 200) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }

}
