import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDeviceComponent } from './link-device/link-device.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { YesNoOkComponent } from './yes-no-ok/yes-no-ok.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    LinkDeviceComponent,
    EditUserComponent,
    YesNoOkComponent,
    InputDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers:[LinkDeviceComponent]
})
export class DialogsModule { }
