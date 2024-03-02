import { ApplicationConfig, NgZone, ɵNoopNgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { authFeature } from './auth/state/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ auth: authFeature.reducer }),
    // { provide: NgZone, useClass: ɵNoopNgZone }
  ]
};
