import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSliderModule} from '@angular/material/slider'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatRadioModule} from '@angular/material/radio'; 

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSliderModule,
  MatTabsModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatRadioModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: [ ...materialModules ]
})
export class MaterialModule { }
