import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MetasComponent } from './metas/metas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MenuComponent,
    AgendaComponent,
    MetasComponent,
    PerfilComponent,
    TarefasComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    AgendaComponent,
    MetasComponent,
    PerfilComponent,
    TarefasComponent
  ]
})
export class MenuModule { }
