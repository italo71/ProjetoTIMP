import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CominucacaoService } from 'src/app/shared/service/cominucacao.service';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resourceForm: FormGroup = this.formBuilder.group({
    login: [null, [Validators.required]],
    senha: [null, [Validators.required]]
  });
  msg:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private session: SessionService,
    private router: Router,
    private comu: CominucacaoService
  ) {
  }

  ngOnInit(): void {
    let sessao = this.session.obterSessao()
    if (sessao != null)
      this.router.navigate(['/menu'])
  }

  logar() {
    let login = this.resourceForm.get('login')?.value
    let senha = this.resourceForm.get('senha')?.value
    this.comu.filter('loading');
    this.msg = '';
    this.session.logar(login, senha).subscribe((data: any) => {
      if (data.status == 'success') {
        this.session.criarSessao(data.data);
        this.comu.filter('loaded');
        this.router.navigate(['/menu']);
      }
      else{
        this.msg = data.message
      }
      this.comu.filter('loaded');
    })
  }
}
