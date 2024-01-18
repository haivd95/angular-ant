import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingSpinnerComponent } from './loading-spinner-component';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [LoadingSpinnerComponent],
  providers: []
})
export class LoadingSpinnerModule   {
}
