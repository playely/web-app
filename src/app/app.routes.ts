import { Routes } from '@angular/router';
import { ContentListComponent } from '@pages/content-list/content-list.component';
import { ContentDetailsComponent } from '@pages/content-details/content-details.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SearchComponent } from '@pages/search/search.component';
import { PlayerComponent } from '@pages/player/player.component';
import { ContentCollectionComponent } from '@pages/content-collection/content-collection.component';
import { ContentPersonalComponent } from '@pages/content-personal/content-personal.component';

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
        path: 'personal',
        component: ContentPersonalComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'play/:mediaType/:contentId',
        component: PlayerComponent,
        data: {
            hideNavbar: true,
            hideFooter: true
          }
    },
    {
        path: ':listId',
        component: ContentListComponent,
    },
    {
        path: ':mediaType/:contentId',
        component: ContentDetailsComponent
    },
    {
        path: 'collection/:mediaType/:collectionId',
        component: ContentCollectionComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
