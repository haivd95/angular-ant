import { ChangeDetectorRef, Component } from '@angular/core';
import { DataSharingBreadcrumbService } from '../../api/services/data-sharing-breadcrumb.service';
import { BreadcrumbModel } from '../../api/models/breadcrumb.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isCollapsed = false;
  breadcrumbData: BreadcrumbModel = {
    name: [],
    link: ''
  };
  constructor(private dataSharingBreadcrumb: DataSharingBreadcrumbService, private changeDref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.dataSharingBreadcrumb.getDataBreadcrumb().subscribe((data: BreadcrumbModel) => {
      this.breadcrumbData = data
    })
    this.changeDref.detectChanges();
 }


  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
