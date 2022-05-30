import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: ':tab',
    component: ContentComponent,
    data: {
      isContentPage: true,
    }
  },
  {
    path: ':contentType/:contentId',
    component: DetailsComponent,
    
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      hideFooter: true,
      title: 'notFound'
    }
  },
  {
    path: '',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
