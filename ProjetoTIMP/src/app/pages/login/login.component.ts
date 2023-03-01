import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionServiceService } from 'src/app/shared/services/session-service.service';

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
  resourceFormCadastro: FormGroup = this.formBuilder.group({
    login: [null, [Validators.required]],
    senha: [null, [Validators.required]],
    senhaConfirma: [null, [Validators.required]],
    email: [null, [Validators.required]],
    nome: [null, [Validators.required]]
  })
  
  constructor(
    private formBuilder: FormBuilder,
    private session: SessionServiceService
  ) {
  }
  ngOnInit() {
  }

  logar() {
    let login = this.resourceForm.get('login')?.value
    let senha = this.session.criptografar(this.resourceForm.get('senha')?.value)
    this.session.logar(login, senha)
  }
}
