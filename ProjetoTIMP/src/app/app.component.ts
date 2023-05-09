import { SessionService } from 'src/app/shared/service/session.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CominucacaoService } from './shared/service/cominucacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarExpanded = true;
  constructor(
    private router: Router,
    private session: SessionService,
    private comu: CominucacaoService
  ) {
    this.comu.listen().subscribe((m: any) => {
      console.log(m)
      if (m == 'loading') {
        $('#loading').removeClass('hide');
      }
      if (m == 'loaded') {
        $('#loading').addClass('hide');
      }
    })
  }
  routerSobre() {
    this.router.navigate(['/sobre']);
  }
  showSideBar(): boolean {
    let lista = ['/prelogin', '/login', '/cadastro']
    return (this.session.obterSessao() == null || lista.includes(this.router.url)) ? false : true
  }
}
