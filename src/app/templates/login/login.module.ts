import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { LoginComponent } from './login.component';
import { LoginRoutingModule, routes } from './login.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzPopoverModule,
    LoginRoutingModule
  ],
  providers: []
})
export class LoginModule {
  static routerMapComponent = routes;

}
