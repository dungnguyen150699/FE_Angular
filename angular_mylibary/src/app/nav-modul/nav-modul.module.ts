import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModulRoutingModule } from './nav-modul-routing.module';


@NgModule({
  declarations: [
    // NavModulModuleComponent // Phải declaration trong appModul thì nó mới ăn antd ??
  ],
  imports: [
    CommonModule,
    NavModulRoutingModule
  ]
})
export class NavModulModule { }
