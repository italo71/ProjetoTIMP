import { Component } from '@angular/core';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  sidebarExpanded = true;
  dataNasc = this.session.obterDataNascUsu();
  nomeUsuario = this.session.obterNomeUsu();
  emailUsuario = this.session.obterEmailUsu();
  constructor(
    private session:SessionService,
  ){}
}
