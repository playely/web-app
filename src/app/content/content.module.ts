import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ContentComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ContentModule { }
