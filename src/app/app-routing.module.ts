import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'player',
    loadChildren:  () => import('./player/player.module').then(m => m.PlayerModule) 
  },
  {
    path: 'search',
    loadChildren:  () => import('./search/search.module').then(m => m.SearchModule) 
  },
  {
    path: 'auth',
    loadChildren:  () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    loadChildren:  () => import('./content/content.module').then(m => m.ContentModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
