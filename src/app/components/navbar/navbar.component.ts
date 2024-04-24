import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { mockRoutes } from '@mocks/routes';
import { IRoute } from '@models/IRoute';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  routes: IRoute[] = mockRoutes;
  activeRoute: IRoute | undefined = mockRoutes[0];
}
