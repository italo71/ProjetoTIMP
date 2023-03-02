import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from './pages/menu/menu.module';
import { PreLoginModule } from './pages/pre-login/pre-login.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    PreLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
