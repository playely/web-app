import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player/player.component';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSliderModule } from "@angular-slider/ngx-slider";


@NgModule({
  declarations: [
    PlayerComponent,
    PlayerControlsComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule,
    NgxSliderModule
  ]
})
export class PlayerModule { }
