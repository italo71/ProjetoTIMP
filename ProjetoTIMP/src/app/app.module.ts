import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';

import { IndexComponent } from './pages/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from './pages/menu/menu.module';
import { PreLoginModule } from './pages/pre-login/pre-login.module';
import { PreLoginComponent } from './pages/pre-login/pre-login.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputDateComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    PreLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
