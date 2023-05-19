import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pre-login
import { LoginComponent } from './pages/pre-login/login/login.component';
import { PreLoginComponent } from './pages/pre-login/pre-login.component';
import { CadastroComponent } from './pages/pre-login/cadastro/cadastro.component';
import { MenuComponent } from './pages/menu/menu.component';
//menu
import { TarefasComponent } from './pages/menu/tarefas/tarefas.component';
import { PerfilComponent } from './pages/menu/perfil/perfil.component';
import { MetasComponent } from './pages/menu/metas/metas.component';


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
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'tarefas',
    component:TarefasComponent
  },
  {
    path: 'perfil',
    component:PerfilComponent
  },
  {
    path: 'metas',
    component:MetasComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
