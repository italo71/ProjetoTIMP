import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Enviroment } from '../enviroment/enviroment'
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  enviroment: Enviroment = new Enviroment
  ws: string = this.enviroment.ws
  local: string = this.enviroment.local
  //ws: string = 'http://localhost:8080/'
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  logar(login: string, pass: string) {
    let postData = {
      "type": "login",
      "login": login,
      "senha": pass
    }
    return this.http.post(this.ws + 'user/get', postData);
  }
  cadastrar(nome: any, email: any, senha: any, data: any, login: any) {
    let postData = {
      "type": "cadastrar",
      "nome": nome,
      "login": login,
      "senha": senha,
      "data_nasc": data,
      "email": email
    }
    return this.http.post(this.ws + 'user/post', postData);
  }
  limparSessao() {
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
  criarSessao(dados: any) {
    let json = {
      "id": dados.id,
      "nome": dados.nome,
      "email": dados.email,
      "data_nasc": dados.data_nasc
    }
    sessionStorage.setItem('session', JSON.stringify(json));
    return this.obterNomeUsu()
  }
  obterSessao() {
    let session = sessionStorage.getItem('session');
    if (session == null)
      return null
    return JSON.parse(session)
  }
  obterNomeUsu() {
    let sessao = this.obterSessao();
    if (sessao.nome != null)
      return sessao.nome
    return null
  }
  obterEmailUsu() {
    let sessao = this.obterSessao();
    if (sessao.email != null)
      return sessao.email
    return null
  }
  obterIdUsuario() {
    let sessao = this.obterSessao();
    if (sessao.id != null)
      return sessao.id
    return null
  }
  obterDataNascUsu() {
    let sessao = this.obterSessao();
    if (sessao.data_nasc != null)
      return sessao.data_nasc;
    return null
  }
}
