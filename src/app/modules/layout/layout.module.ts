import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  NavbarComponent,
  FooterComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [...components]
})
export class LayoutModule { }
