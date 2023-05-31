import { Injectable } from '@angular/core';
import { Enviroment } from '../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  enviroment: Enviroment = new Enviroment
  ws: string = this.enviroment.ws
  local: string = this.enviroment.local
  //ws: string = 'http://localhost:8080/'
  constructor(
    private http: HttpClient,
    private router: Router,
    private session: SessionService
  ) { }

  obterAgenda() {
    let postData = {
      "method": "GET",
      "userID": this.session.obterIdUsuario()
    }
    return this.http.post(this.ws + 'agenda', postData);
  }

  agendaStorage(json: any) {
    sessionStorage.setItem('agenda', JSON.stringify(json));
  }

  getAgendaStorage() {
    let json: any = sessionStorage.getItem('agenda')
    if (!json || json == null) {
      return null;
    }
    return JSON.parse(json);
  }

  salvarAgenda(titulo: any, descricao: any, dataInicial: any, dataFinal: any) {
    let postData = {
      "method": "POST",
      "userID": this.session.obterIdUsuario(),
      "titulo": titulo,
      "descricao": descricao,
      "dataInicio": dataInicial,
      "dataFinal": dataFinal
    }
    return this.http.post(this.ws + 'agenda', postData)
  }

  excluirAgenda(id: any) {
    let postData = {
      "method": "DELETE",
      "idAgenda": id
    }
    return this.http.post(this.ws + 'agenda', postData);
  }

}
