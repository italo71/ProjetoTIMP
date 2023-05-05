import { Component, OnInit } from '@angular/core';
import { CominucacaoService } from 'src/app/shared/service/cominucacao.service';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sidebarExpanded = true;
  dataNasc = this.formatarData(this.session.obterDataNascUsu());
  nomeUsuario = this.session.obterNomeUsu();
  emailUsuario = this.session.obterEmailUsu();
  constructor(
    private session: SessionService,
    private comu: CominucacaoService
  ) { }

  ngOnInit(): void {
    this.comu.filter('loaded');
    this.formatarData(this.dataNasc)
  }

  formatarData(data: any) {
    console.log(data)
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
}