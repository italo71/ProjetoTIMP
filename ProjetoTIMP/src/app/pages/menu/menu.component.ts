import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/service/agenda.service';
import { CominucacaoService } from 'src/app/shared/service/cominucacao.service';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sidebarExpanded = false;
  dataNasc = this.formatarData(this.session.obterDataNascUsu());
  nomeUsuario = this.session.obterNomeUsu();
  emailUsuario = this.session.obterEmailUsu();
  data: any = new Date().toLocaleDateString();
  listaAgenda: Array<any> = [];
  listaExibir: Array<any> = [];
  constructor(
    private session: SessionService,
    private comu: CominucacaoService,
    private agendaRest: AgendaService
  ) { }

  ngOnInit(): void {
    this.comu.filter('loaded');
    this.formatarData(this.dataNasc);
    this.listaAgenda = [];
    if (this.agendaRest.getAgendaStorage() != null) {
      this.listaAgenda = this.agendaRest.getAgendaStorage();
      this.obterEventos();
    }
    else {
      let aux = this.listaAgenda;
      this.agendaRest.obterAgenda().subscribe((data: any) => {
        if (data.status == 'success') {
          let dados: Array<any> = data.data;
          this.listaAgenda = dados;
          this.agendaRest.agendaStorage(this.listaAgenda);
        }
        else {
          this.listaAgenda = aux;
        }
        if (this.listaAgenda.length > 0) {
          this.obterEventos();
        }
      });
    }
  }

  obterEventos() {
    console.log(this.listaAgenda);
    for (let i = 0; i < this.listaAgenda.length; i++) {
      if (new Date(this.listaAgenda[i].data_inicio).toISOString() >= new Date().toISOString()) {
        this.listaExibir.push(this.listaAgenda[i]);
      }
    }
  }

  formatarData(data: any) {
    if (!data)
      return 'Não Informado'
    let l = new Array;
    l = data.split('-')
    let r = ''
    for (let i = 0; i < 3; i++) {
      r = l[i] + '/' + r
    }
    r = r.slice(0, -1)
    return r
  }

  stringData(v: any) {
    return new Date(v).toLocaleDateString();
  }
}