import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GridCarouselComponent } from '../../components/carousels/grid-carousel/grid-carousel.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    GridCarouselComponent
  ]
})
export class SearchModule { }
