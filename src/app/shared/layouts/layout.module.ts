import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutRoutingModule, routes } from './layout.routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { HeaderComponent } from './header/header.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [LayoutComponent, FooterComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzSelectModule,
    NzTagModule,
    NzIconModule,
    ScrollingModule,
    DragDropModule,
    NzMenuModule,
    NzToolTipModule,
    NzPopoverModule,
    NzButtonModule,
    NzAvatarModule,
    NgbModule
  ],
  providers: []
})
export class LayoutModule {
  static routerMapComponent = routes;
}
