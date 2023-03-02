import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pre-login
import { LoginComponent } from './pages/pre-login/login/login.component';
import { PreLoginComponent } from './pages/pre-login/pre-login.component';
import { CadastroComponent } from './pages/pre-login/cadastro/cadastro.component';
import { MenuComponent } from './pages/menu/menu.component';
//menu


const routes: Routes = [
  { path: '', redirectTo: 'prelogin', pathMatch: 'full' },
  {
    path: 'prelogin',
    component:PreLoginComponent
  },
  {
    path: 'menu',
    component:MenuComponent
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
