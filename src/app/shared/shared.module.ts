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
import { PlayerTimePipe } from './pipes/player-time.pipe';
import { TextTimePipe } from './pipes/text-time.pipe';

const components = [
  HeroCarouselComponent,
  CardCarouselComponent,
  NavbarComponent,
  FooterComponent,
  GridCarouselComponent,
  LoadingComponent,
  BannerComponent,
  DescriptionCardComponent,
  InnerCardComponent,
];

const pipes = [
  PlayerTimePipe,
  TextTimePipe,
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([]),
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [ ...components, ...pipes, TranslateModule ]
})
export class SharedModule { }
