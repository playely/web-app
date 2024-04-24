import { Routes } from '@angular/router';
import { ContentListComponent } from '@pages/content-list/content-list.component';
import { ContentDetailsComponent } from '@pages/content-details/content-details.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentListComponent,
    },
    {
        path: ':listId',
        component: ContentListComponent,
    },
    {
        path: ':contentType/:contentId',
        component: ContentDetailsComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    }
];
