import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { MaterialModule } from '../shared/material.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { DevicesComponent } from './devices/devices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreferencesComponent } from './preferences/preferences.component';


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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
