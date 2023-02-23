import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SessionData } from '../models/session-data';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  constructor() { }
  session = new SessionData();
  setUserSession(data: SessionData) {
    this.session = data
  }
  getUserSession() {
    return this.session
  }

}
