import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

//pre-login
import { LoginComponent } from './pages/pre-login/login/login.component';
import { PreLoginComponent } from './pages/pre-login/pre-login.component';
import { CadastroComponent } from './pages/pre-login/cadastro/cadastro.component';

//menu


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',//trocar pra menu
    component:IndexComponent
  },
  {
    path: 'pre-login',
    component:PreLoginComponent
  },
  {
    path: 'cadastro',
    component:CadastroComponent
  },
  /* {
    path: 'account',
    component:PessoaComponent
  },
  {
    path: 'sobre',
    component:SobreComponent
  }, */
  {
    path:'login',
    component:LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
