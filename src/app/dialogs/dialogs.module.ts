import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { MaterialModule } from '../shared/material.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { YesNoOkComponent } from './yes-no-ok/yes-no-ok.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';


@NgModule({
  declarations: [
    LinkDeviceComponent,
    EditUserComponent,
    YesNoOkComponent,
    InputDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DialogsModule { }
