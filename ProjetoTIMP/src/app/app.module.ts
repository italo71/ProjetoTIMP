import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { LoginComponent } from './pages/login/login.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { Cadastro2Component } from './pages/cadastro2/cadastro2.component';
import { DadosComponent } from './pages/dados/dados.component';
import { EstudosComponent } from './pages/estudos/estudos.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { IndexComponent } from './pages/index/index.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputDateComponent,
    LoginComponent,
    AgendaComponent,
    CadastroComponent,
    Cadastro2Component,
    DadosComponent,
    EstudosComponent,
    ExerciciosComponent,
    PessoaComponent,
    PrincipalComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
