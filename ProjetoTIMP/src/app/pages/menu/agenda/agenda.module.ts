import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AgendaComponent } from './agenda.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);
import * as moment from 'moment';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'pt', headerDateFormat: 'daysRange' })
  ],
  exports: [
    AgendaComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MOMENT, useValue: moment }
  ]
})
export class AgendaModule { }
