import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './components/content/content.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from '../../shared/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CardCarouselComponent } from '../../components/carousels/card-carousel/card-carousel.component';
import { GridCarouselComponent } from '../../components/carousels/grid-carousel/grid-carousel.component';
import { PipesModule } from '../../pipes/pipes.module';
import { HeroCarouselComponent } from '../../components/carousels/hero-carousel/hero-carousel.component';
import { BannerComponent } from '../../components/banner/banner.component';


@NgModule({
  declarations: [
    ContentComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    TranslateModule,
    MaterialModule,
    PipesModule,
    CardCarouselComponent,
    GridCarouselComponent,
    HeroCarouselComponent,
    BannerComponent
  ]
})
export class ContentModule { }
