import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTimePipe } from './player-time.pipe';
import { TextTimePipe } from './text-time.pipe';

const pipes = [
  PlayerTimePipe,
  TextTimePipe,
];

@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule
  ],
  exports:[...pipes]
})
export class PipesModule { }
