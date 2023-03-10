import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { SessionServiceService } from 'src/app/shared/services/session-service.service';

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
    //private session: SessionServiceService
  ) {
  }

  logar() {
    let login = this.resourceForm.get('login')?.value
    let senha = this.resourceForm.get('senha')?.value
    /* this.session.logar(login, senha).subscribe((data:any)=>{
      console.log(data)
    }) */
  }
}
