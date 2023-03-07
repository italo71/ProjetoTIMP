import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RologioComponent } from './components/rologio/rologio.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    RologioComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule, 
    FormsModule 
    
  ],
  exports: [
    SidebarComponent,
    RologioComponent

  ]
})
export class SharedModule { }
