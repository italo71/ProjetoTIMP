import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre.component';

const routes: Routes = [
  {
    path:'',component:SobreComponent
  },
  {
    path:'home',component:SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
