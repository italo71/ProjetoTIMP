import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  resourceForm: FormGroup = this.formBuilder.group({
    login: [null, [Validators.required]],
    senha: [null, [Validators.required]]
  });
  
  constructor(
    private formBuilder: FormBuilder,
    public session:SessionService
  ) {
  }

  logar() {
    let login = this.resourceForm.get('login')?.value
    let senha = this.resourceForm.get('senha')?.value
    this.session.logar(login, senha).subscribe((data:any)=>{
      console.log(data)
    })
  }
}
