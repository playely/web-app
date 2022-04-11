import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarIconComponent } from './navbar/navbar-icon/navbar-icon.component';

const components = [
  HeroCarouselComponent,
  CardCarouselComponent,
  NavbarComponent
];

@NgModule({
  declarations: [
    ...components,
    NavbarIconComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ ...components ]
})
export class SharedModule { }
