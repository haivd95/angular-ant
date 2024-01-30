import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule, routes } from './products.routing.module';
import { ProductComponent } from './product-component/product.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    NzPopoverModule,
    TranslateModule
  ],
  providers: []
})
export class ProductsModule {
  static routerMapComponent = routes;
}
