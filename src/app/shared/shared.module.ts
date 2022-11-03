import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DescriptionCardComponent } from './cards/description-card/description-card.component';
import { InsideCardComponent } from './cards/inside-card/inside-card.component';
import { MaterialModule } from './material.module';
import { BannerComponent } from './banner/banner.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerTimePipe } from './pipes/player-time.pipe';
import { TextTimePipe } from './pipes/text-time.pipe';
import { SwiperModule } from 'swiper/angular';
import { HeroCarouselComponent } from './components/carousels/hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './components/carousels/card-carousel/card-carousel.component';
import { GridCarouselComponent } from './components/carousels/grid-carousel/grid-carousel.component';

const components = [
  HeroCarouselComponent,
  CardCarouselComponent,
  NavbarComponent,
  FooterComponent,
  GridCarouselComponent,
  BannerComponent,
  DescriptionCardComponent,
  InsideCardComponent,
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
    ReactiveFormsModule,
    SwiperModule
  ],
  exports: [ ...components, ...pipes, TranslateModule ]
})
export class SharedModule { }
