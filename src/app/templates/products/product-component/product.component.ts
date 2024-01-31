import { Component } from '@angular/core';
import { DataSharingBreadcrumbService } from '../../../api/services/data-sharing-breadcrumb.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  isVisible = false;
  isOkLoading = false;
  isConfirmLoading = false;

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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
