// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };

export class AppConfig {
    public static APP_CONFIG = {
        app: 'Viettel Web Framework 2.0',
        defaultLanguage: 'vi',
        successCode: '200',
        showInTab: true,
        paginationOption: [5, 10, 20],
        encryptKey: 'webappvodich1234',
        hashKey: 'w3b-m0bil3-m0n3y-2020'
    };
    // get value in lib
    public get appConfig() {
        return AppConfig;
    }
}

