import { Routes } from '@angular/router';
import { ContentListComponent } from '@pages/content-list/content-list.component';
import { ContentDetailsComponent } from '@pages/content-details/content-details.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SearchComponent } from '@pages/search/search.component';
import { MyContentComponent } from '@pages/my-content/my-content.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentListComponent,
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'my-content',
        component: MyContentComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: ':listId',
        component: ContentListComponent,
    },
    {
        path: ':contentType/:contentId',
        component: ContentDetailsComponent
    },
];
