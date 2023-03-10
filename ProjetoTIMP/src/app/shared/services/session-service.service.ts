import { Injectable } from '@angular/core';
import { SessionData } from '../models/session-data';
import { Enviroment } from '../enviroment/enviroment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  ws: any;
  constructor(
    private Enviroment: Enviroment,
    private http: HttpClient,
  ) {
    this.ws = this; Enviroment.url
  }
  session = new SessionData();
  setUserSession(data: SessionData) {
    this.session = data
  }
  getUserSession() {
    return this.session
  }
  logar(login: string, pass: string) {
    let postData = {
      "type": "login",
      "login": login,
      "senha": pass
    }
    return this.http.post(this.ws + 'user/get', JSON.stringify(postData));
  }
}
