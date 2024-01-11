import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product-component/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
