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
import { LegalComponent } from '@pages/legal/legal.component';
import { PrivacyPolicyComponent } from './pages/legal/privacy-policy/privacy-policy.component';
import { TermsUseComponent } from './pages/legal/terms-use/terms-use.component';
import { FaqComponent } from './pages/legal/faq/faq.component';

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
        component: ContentPersonalComponent,
        canActivate: [LoggedGuard]
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'legal',
        component: LegalComponent,
        children: [
            {
                path: 'privacy-policy',
                component: PrivacyPolicyComponent
            },
            {
                path: 'terms-of-use',
                component: TermsUseComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            }
        ]
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
