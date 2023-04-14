import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/service/session.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  login: any;
  senha: any;
  confirmaSenha: any;
  email: any;
  nome: any;
  data_nasc: any;
  verifiAnterior: string = '';
  cadastroOk: boolean = true
  /* resourceForm:FormGroup = this.formBuilder.group({
    login:[null,[Validators.required]],
    senha:[null,[Validators.required]],
    confirmaSenha:[null,[Validators.required]],
    email:[null,[Validators.required]],
    nome:[null,[Validators.required]],
    data_nasc:[null,[Validators.required]]
  }) */
  constructor(
    private session: SessionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    $('#login-indisponivel').css('display', 'none');
  }

  verificarLogin() {

    if (this.login != this.verifiAnterior) {
      this.session.vefiricaLogin(this.login).subscribe((data: any) => {
        if (data.status == 'erro') {
          if (data.message == 'login ja cadastrado') {
            $('#login-indisponivel').css('display', '');
            this.cadastroOk = false
          }
        }
        else
          this.cadastroOk = true
        this.verifiAnterior = this.login;
      })
    }
  }

  registrar() {
    if (this.cadastroOk) {
      if (this.senha == this.confirmaSenha) {
        this.session.cadastrar(this.nome, this.email, this.senha, this.data_nasc, this.login).subscribe((data: any) => {
          if (data.status == 'success') {
            this.router.navigate(['/login'])
          }
        });
      }
    }
  }
}
