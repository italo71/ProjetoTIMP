import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
  },
  {
    path: 'pessoal',
    loadChildren: () => import('./pages/pessoa/pessoa.component').then(m => m.PessoaComponent),
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then(m => m.SobreModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
