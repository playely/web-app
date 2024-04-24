import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from 'app/interceptors/token.interceptor';
import { ConfigService } from './services/config.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function initializeApp(configService: ConfigService) {
  return (): Promise<any> =>
    configService.getTMDBConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    })), 
    provideClientHydration(), 
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
  {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps: [ConfigService],
  }, provideAnimationsAsync(),]
};
