import { Component } from '@angular/core';
import { DataSharingBreadcrumbService } from '../../../api/services/data-sharing-breadcrumb.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private dataSharingBreadcrumb: DataSharingBreadcrumbService) {
    this.dataSharingBreadcrumb.setDataBreadcrumb({
      name: ['products'],
      link: '/products'
    })
  }

  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
