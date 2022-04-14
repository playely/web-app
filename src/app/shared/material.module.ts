import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSelectModule} from '@angular/material/select'; 

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
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
