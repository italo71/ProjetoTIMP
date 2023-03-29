import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private session: SessionService,
    private router: Router
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
    this.session.logar(login, senha).subscribe((data: any) => {
      if (data.status == 'success') {
        this.session.criarSessao(data.data)
        this.router.navigate(['/menu'])
      }
    })
  }
}
