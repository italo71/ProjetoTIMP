import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
ws:string = 'https://rotina-timp.azurewebsites.net/'
local:string = 'http://localhost:8080/'
  constructor(
    private http: HttpClient,
  ) { }
  logar(login: string, pass: string) {
    let postData = {
      "type": "login",
      "login": login,
      "senha": pass
    }
    return this.http.post(this.local + 'user/get', postData);
  }
}
