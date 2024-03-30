import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import {MAIN_ROUTES} from './app.routes';
import {IconModule} from "./shared/modules/icon.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AlertService} from "./shared/services/alert.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(MAIN_ROUTES),
    importProvidersFrom(IconModule,
      RouterModule,
      HttpClientModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
        useDefaultLang: true
      })),
    AlertService],
};

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
