import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';
import { MaterialModule } from '../../shared/material.module';
import { PlayerLoadingComponent } from './components/loading/loading.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    PlayerComponent,
    PlayerControlsComponent,
    PlayerLoadingComponent,
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule,
    PipesModule
  ]
})
export class PlayerModule { }
