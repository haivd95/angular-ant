import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule, routes } from './products.routing.module';
import { ProductComponent } from './product-component/product.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    NzPopoverModule,
    TranslateModule,
    NzModalModule,
    NzButtonModule,
  ],
  providers: []
})
export class ProductsModule {
  static routerMapComponent = routes;
}
