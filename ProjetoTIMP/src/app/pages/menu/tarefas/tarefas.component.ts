import { Component, OnInit } from '@angular/core';
import { CominucacaoService } from 'src/app/shared/service/cominucacao.service';
import { TarefasService } from 'src/app/shared/service/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  sidebarExpanded = true;
  titulo: string = '';
  descricao: string = '';
  constructor(
    private rest: TarefasService,
    private comu: CominucacaoService,
  ) { }

  ngOnInit(): void {
    this.rest.obterTarefas().subscribe((data: any) => {
      if (data.status == "success") {
        console.log(data.data)
      }

      else {
        console.log(data.message)
      }
    })
  }

  addTarefa() {/* .replace(/ /g, '') */
    if (this.titulo.replace(/ /g, '') != '' || this.descricao.replace(/ /g, '') != '') {
      this.rest.novaTarefa(this.titulo, this.descricao).subscribe((data: any) => {
        console.log(data.status);
        if (data.status == 'success') {
          this.titulo = '';
          this.descricao = '';
          $('#message').val(data.message)
        }
      })
    }
  }
}
