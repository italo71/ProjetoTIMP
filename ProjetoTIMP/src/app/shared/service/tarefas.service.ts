import { HttpClient } from '@angular/common/http';
import { Enviroment } from './../enviroment/enviroment';
import { SessionService } from 'src/app/shared/service/session.service';
import { Injectable } from '@angular/core';
import { CominucacaoService } from './cominucacao.service';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  enviroment: Enviroment = new Enviroment
  ws: string = this.enviroment.ws
  local: string = this.enviroment.local
  constructor(
    private session: SessionService,
    private comunicate: CominucacaoService,
    private http: HttpClient,
  ) { }
  tarefasStorage(tarefas: any) {
    sessionStorage.setItem('tarefas', tarefas)
  }
  obterTarefasStorage(){
    return sessionStorage.getItem('tarefas')
  }
  novaTarefa(titulo: string, descricao: string) {
    let postData = {
      "id_usu": this.session.obterIdUsuario(),
      "titulo": titulo,
      "descricao": descricao
    }
    return this.http.post(this.ws + 'tarefas', postData)
  }

  obterTarefas() {
    let postData = {
      "type": "get_user",
      "id_usu": this.session.obterIdUsuario()
    }
    return this.http.post(this.ws + 'tarefas', postData)
  }
}
