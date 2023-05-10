import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { AgendaService } from './agenda.service';
import { LOCALE_ID } from '@angular/core';
import { AgendaComponent } from './agenda.component';

describe('AgendaComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),
        SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),
      ],
      providers: [
        AgendaService,
        { provide: LOCALE_ID, useValue: 'en-US' }
      ],
      declarations: [
        AgendaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AgendaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Calendar Scheduler Demo'`, () => {
    const fixture = TestBed.createComponent(AgendaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Calendar Scheduler Demo');
  });
});
