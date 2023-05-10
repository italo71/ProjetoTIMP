import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MetasComponent } from './metas/metas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);
import * as moment from 'moment';

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
    RouterModule,
    BrowserModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'pt', headerDateFormat: 'daysRange' })
  ],
  exports: [
    MenuComponent,
    AgendaComponent,
    MetasComponent,
    PerfilComponent,
    TarefasComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MOMENT, useValue: moment }
  ]
})
export class MenuModule { }
