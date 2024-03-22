import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import {MAIN_ROUTES} from './app.routes';
import {IconModule} from "./shared/modules/icon.module";
import {HttpClientModule} from "@angular/common/http";
import {AlertService} from "./shared/services/alert.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(MAIN_ROUTES),
    importProvidersFrom(IconModule, RouterModule, HttpClientModule, BrowserAnimationsModule),
    AlertService],
};
