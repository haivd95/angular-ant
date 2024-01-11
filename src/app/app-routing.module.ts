import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from '../error-page/404.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { PostsComponent } from './templates/posts/posts.component';
import { ProductsRoutingModule } from './templates/products/products.routing.module';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'products', loadChildren: () => import('./templates/products/products.module').then(m => m.ProductsModule) },
      { path: 'posts', component: PostsComponent, pathMatch: 'full'},
    ]
  },
  {
    path: '404',
    component: P404Component,
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
