import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './carousels/hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './carousels//card-carousel/card-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarIconComponent } from './navbar/navbar-icon/navbar-icon.component';
import { FooterComponent } from './footer/footer.component';
import { GridCarouselComponent } from './carousels/grid-carousel/grid-carousel.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { DescriptionCardComponent } from './cards/description-card/description-card.component';
import { InnerCardComponent } from './cards/inner-card/inner-card.component';
import { MaterialModule } from './material.module';
import { BannerComponent } from './banner/banner.component';

const components = [
  HeroCarouselComponent,
  CardCarouselComponent,
  NavbarComponent,
  FooterComponent,
  GridCarouselComponent,
  LoadingComponent,
  BannerComponent,
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
    MaterialModule,
    RouterModule.forChild([])
  ],
  exports: [ ...components ]
})
export class SharedModule { }
