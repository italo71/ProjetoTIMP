import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/service/session.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  login:any;
  senha:any;
  confirmaSenha:any;
  email:any;
  nome:any;
  data_nasc:any;
  /* resourceForm:FormGroup = this.formBuilder.group({
    login:[null,[Validators.required]],
    senha:[null,[Validators.required]],
    confirmaSenha:[null,[Validators.required]],
    email:[null,[Validators.required]],
    nome:[null,[Validators.required]],
    data_nasc:[null,[Validators.required]]
  }) */
  constructor(
    private session:SessionService,
    private router:Router,
  ){}

  registrar(){
    if(this.senha == this.confirmaSenha){
      this.session.cadastrar(this.nome,this.email,this.senha,this.data_nasc,this.login).subscribe((data:any)=>{
        if(data.status == 'success'){
          this.router.navigate(['/login'])
        }
      });
    }
  }
}
