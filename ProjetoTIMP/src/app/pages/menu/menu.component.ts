import { Component } from '@angular/core';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  sidebarExpanded = true;
  nomeUsuario = this.session.obterNomeUsu()
  constructor(
    private session:SessionService,
  ){}
}
