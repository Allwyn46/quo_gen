import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { PreventDefaultEventPlugin } from './services/prevent-default-event';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: EVENT_MANAGER_PLUGINS,
      multi: true,
      useClass: PreventDefaultEventPlugin,
    },
  ],
};
