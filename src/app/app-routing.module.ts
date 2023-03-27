import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'player',
    loadChildren:  () => import('./modules/player/player.module').then(m => m.PlayerModule) 
  },
  {
    path: 'search',
    loadChildren:  () => import('./modules/search/search.module').then(m => m.SearchModule) 
  },
  {
    path: 'auth',
    loadChildren:  () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'settings',
    loadChildren:  () => import('./modules/settings/settings.module').then(m => m.SettingsModule) 
  },
  {
    path: '',
    loadChildren:  () => import('./modules/content/content.module').then(m => m.ContentModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
