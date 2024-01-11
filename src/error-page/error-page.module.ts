import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {P500Component} from "./500.component";
import {P404Component} from "./404.component";


@NgModule({
    declarations: [P404Component, P500Component ],
  imports: [
    CommonModule
  ],
    exports:[P404Component, P500Component]
})
export class ErrorPageModule { }
