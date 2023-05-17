import { Injectable } from '@angular/core';
import { Enviroment } from '../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  enviroment: Enviroment = new Enviroment
  ws: string = this.enviroment.ws
  local: string = this.enviroment.local
  //ws: string = 'http://localhost:8080/'
  constructor(
    private http: HttpClient,
    private router: Router,
    private session: SessionService
  ) { }

  cadastrarAlterarMeta(titulo: any, meta: any, dataInicio: any, dataFinal: any, idMeta: any = null) {
    let postData = {
      "method": idMeta ? "PUT" : "POST",
      "titulo": titulo,
      "meta": meta,
      "dataInicio": dataInicio,
      "dataFinal": dataFinal,
      "userID": this.session.obterIdUsuario(),
      "idMeta": idMeta
    }
    return this.http.post(this.ws + 'meta', postData);
  }

  obterMetasCadastradas(userID: any = null) {
    if (!userID)
      userID = this.session.obterIdUsuario();
    let postData = {
      "method": "GET",
      "userID": userID
    }
    return this.http.post(this.ws + 'meta', postData);
  }

  apagarMeta(metaID: any) {
    let postData = {
      "method": "DELETE",
      "metaID": metaID
    }
    return this.http.post(this.ws + 'meta', postData);
  }
}
