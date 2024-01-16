import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from '../error-page/404.component';
import { LayoutComponent } from './shared/layouts/layout.component';
import { LoginComponent } from './templates/login/login.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'products', loadChildren: () => import('./templates/products/products.module').then(m => m.ProductsModule) },
      { path: 'posts', loadChildren: () => import('./templates/posts/posts.module').then(m => m.PostsModule) },
    ]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Page 404'
    }
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
