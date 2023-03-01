import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MetasComponent } from './metas/metas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TarefasComponent } from './tarefas/tarefas.component';

@NgModule({
  declarations: [
    MenuComponent,
    AgendaComponent,
    MetasComponent,
    PerfilComponent,
    TarefasComponent
  ],
  imports: [
    CommonModule
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
