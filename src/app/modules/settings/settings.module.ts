import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../shared/material.module';
import { DevicesComponent } from './components/devices/devices.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SettingsComponent } from './settings.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SubscriptionsComponent,
    DevicesComponent,
    PreferencesComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SettingsModule { }
