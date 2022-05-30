import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './carousels/hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './carousels//card-carousel/card-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GridCarouselComponent } from './carousels/grid-carousel/grid-carousel.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { DescriptionCardComponent } from './cards/description-card/description-card.component';
import { InnerCardComponent } from './cards/inner-card/inner-card.component';
import { MaterialModule } from './material.module';
import { BannerComponent } from './banner/banner.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

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
    DescriptionCardComponent,
    InnerCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([]),
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [ ...components, TranslateModule ]
})
export class SharedModule { }
