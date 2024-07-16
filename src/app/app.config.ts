import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { headerInterceptor } from './Interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withHashLocation()),provideHttpClient(withInterceptors([headerInterceptor])), provideAnimationsAsync()]
};
