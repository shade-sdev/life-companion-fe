import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import {MAIN_ROUTES} from './app.routes';
import {IconModule} from "./shared/modules/icon.module";
import {HttpClientModule} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(MAIN_ROUTES),
    importProvidersFrom(IconModule, RouterModule, HttpClientModule)]
};
