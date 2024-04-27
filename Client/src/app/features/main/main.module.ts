import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
