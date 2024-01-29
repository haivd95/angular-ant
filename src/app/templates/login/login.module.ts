import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { LoginComponent } from './login.component';
import { LoginRoutingModule, routes } from './login.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FocusFirstInvalidFieldDirective } from '../../shared/directive/focus-form.directive';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NzPopoverModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class LoginModule {
  static routerMapComponent = routes;

}
