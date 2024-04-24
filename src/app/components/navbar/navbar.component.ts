import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
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
}
