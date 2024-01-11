import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule, } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorPageModule } from '../error-page/error-page.module';
import { CustomErrorInterceptor } from './shared/interceptors/CustomErrorInterceptor';
import { AppConfig } from './app.config';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
    declarations: [
        AppComponent, MainLayoutComponent, FooterComponent,
    ],
    imports: [
        AppRoutingModule, BrowserAnimationsModule,
        FormsModule, NgbModule, BrowserModule,
        CommonModule,
        HttpClientModule,
        ErrorPageModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzInputModule,
        NzSelectModule,
        NzTagModule,
        NzIconModule,
        ScrollingModule,
        DragDropModule,
        NzMenuModule,
        NzToolTipModule
    ],
    exports: [FormsModule],
    providers: [
        HttpClient,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        // { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        { provide: 'APP_CONFIG', useClass: AppConfig },
        { provide: HTTP_INTERCEPTORS, useClass: CustomErrorInterceptor, multi: true },
        { provide: NZ_ICONS, useValue: icons }
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
    static injector: Injector;

    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
}
