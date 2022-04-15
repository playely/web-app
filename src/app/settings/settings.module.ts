import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { MaterialModule } from '../shared/material.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { DevicesComponent } from './devices/devices.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SubscriptionsComponent,
    DevicesComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule
  ]
})
export class SettingsModule { }
