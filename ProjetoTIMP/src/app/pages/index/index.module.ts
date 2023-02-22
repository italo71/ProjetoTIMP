import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class IndexModule { }