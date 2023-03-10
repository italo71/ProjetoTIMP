import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RologioComponent } from './components/rologio/rologio.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BackgroundColorComponent } from './components/background-color/background-color.component';
import { SessionServiceService } from './services/session-service.service';



@NgModule({
  declarations: [
    SidebarComponent,
    RologioComponent,
    PomodoroComponent,
    TasksComponent,
    BackgroundColorComponent,
    SessionServiceService

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule, 
    FormsModule ,
    ReactiveFormsModule
    
  ],
  exports: [
    SidebarComponent,
    RologioComponent,
    PomodoroComponent,
    TasksComponent,
    BackgroundColorComponent,
    SessionServiceService

  ]
})
export class SharedModule { }
