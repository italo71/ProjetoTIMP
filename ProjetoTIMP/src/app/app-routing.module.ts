import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/pre-login/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component:IndexComponent
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
