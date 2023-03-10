import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  resourceForm:FormGroup = this.formBuilder.group({
    login:[null,[Validators.required]],
    senha:[null,[Validators.required]],
    confirmaSenha:[null,[Validators.required]],
    email:[null,[Validators.required]],
    nome:[null,[Validators.required]]
  })
  constructor(
    private formBuilder: FormBuilder,
  ){}
}
