import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionData } from 'src/app/shared/models/session-data';
import { SessionServiceService } from 'src/app/shared/services/session-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private session: SessionServiceService,
  ) { }
  sessionON() {
    let i = this.session.getUserSession()
    if (i.idUser == -1)
      return '/login'
    return '/account'
  }
}