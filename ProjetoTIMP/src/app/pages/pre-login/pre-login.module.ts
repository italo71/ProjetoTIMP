import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PreLoginComponent } from './pre-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PreLoginComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    PreLoginComponent,
    LoginComponent,
    CadastroComponent
  ]
})
export class PreLoginModule { }
