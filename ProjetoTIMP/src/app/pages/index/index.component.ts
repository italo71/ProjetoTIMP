import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaComponent } from 'src/app/pages/pessoa/pessoa.component'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  pessoasLink() {
    this.router.navigate(['/pessoal'])
  }
}
