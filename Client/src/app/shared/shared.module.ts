import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ShellComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ShellComponent,
    CardComponent
  ]
})
export class SharedModule { }
