import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageModule } from '../../../error-page/error-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ErrorPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class SharedModuleModule { }
