import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RologioComponent } from './components/rologio/rologio.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [
    SidebarComponent,
    RologioComponent,
    PomodoroComponent,
    TasksComponent

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
    TasksComponent

  ]
})
export class SharedModule { }
