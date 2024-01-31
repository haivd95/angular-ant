import { metaReducers } from './shared/store/app.meta-reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule, } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppConfig } from './app.config';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ApiService } from './api/services/api.service';
import { SharedModule } from './shared/shared-module/shared-module.module';
import { CustomErrorInterceptor } from './shared/interceptors/CustomErrorInterceptor';
import { LoadingSpinnerModule } from './shared/component/loading-spinner/loading-spinner.module';
import { LoadingSpinnerService } from './api/services/loadingSpinnerService.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './shared/store/app.reducer';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, BrowserAnimationsModule,
    StoreModule.forRoot(
      appReducers,
      { metaReducers }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('language') ?? 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    FormsModule,
    SharedModule,
    LoadingSpinnerModule,
  ],
  exports: [FormsModule, TranslateModule],
  providers: [
    HttpClient,
    ApiService,
    TranslateService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: 'APP_CONFIG', useClass: AppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: CustomErrorInterceptor, multi: true },
    { provide: NZ_ICONS, useValue: icons },
    LoadingSpinnerService
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
