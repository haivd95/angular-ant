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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './shared/store';
import { environment } from '../environments/environment';
import { ApiService } from './api/services/api.service';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { CustomErrorInterceptor } from './shared/interceptors/CustomErrorInterceptor';
import { LoadingSpinnerModule } from './shared/component/loading-spinner/loading-spinner.module';
import { LoadingSpinnerService } from './api/services/loadingSpinnerService';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          strictStateSerializability: false,
          strictActionSerializability: false
      }
  }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    SharedModuleModule,
    LoadingSpinnerModule
  ],
  exports: [FormsModule],
  providers: [
    HttpClient,
    ApiService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    // { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
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
