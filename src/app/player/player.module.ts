import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player/player.component';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { PlayerLoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    PlayerComponent,
    PlayerControlsComponent,
    PlayerLoadingComponent,
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PlayerModule { }
