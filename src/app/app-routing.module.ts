import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from '../error-page/404.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
