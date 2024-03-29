import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { LoginComponent } from './login.component';
import { LoginRoutingModule, routes } from './login.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../../shared/directive/directives.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NzPopoverModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
    NzIconModule
  ],
  providers: []
})
export class LoginModule {
  static routerMapComponent = routes;

}
