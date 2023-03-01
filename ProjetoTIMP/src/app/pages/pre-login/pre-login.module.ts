import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PreLoginComponent } from './pre-login.component';




@NgModule({
  declarations: [
    PreLoginComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PreLoginComponent,
    LoginComponent,
    CadastroComponent
  ]
})
export class PreLoginModule { }
