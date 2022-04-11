import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarIconComponent } from './navbar/navbar-icon/navbar-icon.component';
import { DescriptionCardComponent } from './card-carousel/description-card/description-card.component';
import { InnerCardComponent } from './card-carousel/inner-card/inner-card.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  HeroCarouselComponent,
  CardCarouselComponent,
  NavbarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...components,
    NavbarIconComponent,
    DescriptionCardComponent,
    InnerCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ ...components ]
})
export class SharedModule { }
