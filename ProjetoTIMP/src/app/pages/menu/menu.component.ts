import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.formatarData(this.dataNasc)
  }

  formatarData(data: any) {
    let l = new Array;
    l = data.split('-')
    let r = ''
    for (let i = 0; i < 3; i++) {
      console.log(l)
      console.log(l[i])
      r = l[i] + '/' + r
    }
    r = r.slice(0, -1)
    return r
  }
}