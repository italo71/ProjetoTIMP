import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router
  ){}
}
