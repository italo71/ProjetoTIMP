import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SobreModule { }
