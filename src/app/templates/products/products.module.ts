import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule, routes } from './products.routing.module';
import { ProductComponent } from './product-component/product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers: []
})
export class ProductsModule {
  static routerMapComponent = routes;
}
