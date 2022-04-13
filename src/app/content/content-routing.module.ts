import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    data: {
      isContentPage: true,
    }
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
