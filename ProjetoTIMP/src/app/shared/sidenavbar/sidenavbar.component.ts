import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {
  
  resourceForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {

    //validators  
    this.resourceForm = this.formBuilder.group({
      currentEmpresa: [null, []]
    });
    this.onSearch();
  }

  routerTeste() {
    let lista = ['/pre-login','/login/a','/login/o','/login/f','/login/g', '/fornecedor']
    return lista.includes(this.router.url) ? true : false;
  }
  
  onSearch() {
    $(document).ready(function () {
      //search on menu	
      $('#search').bind("input", function () {
        var value = $('#sidebar #search').val();
        value = value.toLowerCase().trim();
        value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (value.length > 0) {
          //open all menus
          $('#sidebar .nav-item .collapse').addClass('show');
          //hide title menu
          $('#sidebar .nav-item .menu').hide();
          //$('#sidebar .nav-item').css('margin-bottom','.5em');
          $('#sidebar .nav-item').css('margin-bottom', '0');
        } else {
          //close all menus
          $('#sidebar .nav-item .collapse').removeClass('show');
          //open first menu
          //$('#sidebar .nav-item .collapse:first-child').addClass('show');
          //show title all menu
          $('#sidebar .nav-item .menu').show();
          //restore margin-bottom
          $('#sidebar .nav-item').css('margin-bottom', '.5em');
        }
        $("#sidebar .nav-item .nav-link:not('.menu')").show().filter(function () {
          var texto = $().text().toLowerCase().trim();
          texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          return texto.indexOf(value) == -1;
        }).hide();
      });
    });

  }

}
