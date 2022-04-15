import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {
    path:':id',
    component: PlayerComponent,
    data: {
      hideNavbar: true,
      hideFooter: true,
      cover: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
