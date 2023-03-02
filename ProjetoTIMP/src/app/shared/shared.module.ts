import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';


@NgModule({
  declarations: [
    SidenavbarComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    SidenavbarComponent
  ]
})
export class SharedModule { }
