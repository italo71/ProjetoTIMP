import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SessionData } from '../models/session-data';
import { sha256 } from 'js-sha256';

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
  criptografar(pass: string) {
    return sha256.hmac(pass, 'texto');
  }
  logar(login:string, pass:string){
    
  }
}
