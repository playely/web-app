import { Routes } from '@angular/router';
import { ContentListComponent } from '@pages/content-list/content-list.component';
import { ContentDetailsComponent } from '@pages/content-details/content-details.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SearchComponent } from '@pages/search/search.component';
import { PlayerComponent } from '@pages/player/player.component';
import { ContentCollectionComponent } from '@pages/content-collection/content-collection.component';
import { ContentPersonalComponent } from '@pages/content-personal/content-personal.component';
import { SignInComponent } from '@pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from '@pages/auth/sign-up/sign-up.component';
import { AuthComponent } from '@pages/auth/auth.component';
import { ForgotPasswordComponent } from '@pages/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '@pages/auth/reset-password/reset-password.component';
import { LoggedGuard } from './guards/logged.guard';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { SettingsComponent } from '@pages/settings/settings.component';
import { SettingsMenuComponent } from '@pages/settings/settings-menu/settings-menu.component';
import { InfoComponent } from '@pages/settings/info/info.component';

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
        path: 'settings',
        component: SettingsComponent,
        canActivate: [LoggedGuard],
        children: [
            {
                path: '',
                component: SettingsMenuComponent
            },
            {
                path: 'information',
                component: InfoComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    },
    {
        path: 'personal',
        component: ContentPersonalComponent,
        canActivate: [LoggedGuard]
    },
    {
        path: 'auth',
        component: AuthComponent,
        canActivateChild: [NotLoggedGuard],
        children: [
            {
                path: 'sign-up',
                component: SignUpComponent,
                data: {
                    hideNavbar: true,
                    hideFooter: true
                  }
            },
            {
                path: 'sign-in',
                component: SignInComponent,
                data: {
                    hideNavbar: true,
                    hideFooter: true
                  }
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                data: {
                    hideNavbar: true,
                    hideFooter: true
                  }
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
                data: {
                    hideNavbar: true,
                    hideFooter: true
                  }
            },
            {
                path: '**',
                redirectTo: 'sign-in'
            }
        ],
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
