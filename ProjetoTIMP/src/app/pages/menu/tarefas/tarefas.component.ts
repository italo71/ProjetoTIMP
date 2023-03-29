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
  tarefas: Array<any> = [];
  constructor(
    private rest: TarefasService,
    private comu: CominucacaoService,
  ) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas() {
    this.rest.obterTarefas().subscribe((data: any) => {
      console.log(data)
      if (data.status == "success") {
        if (data.data.length != 0) {
          this.tarefas = []
          data.data.forEach((data: any) => {
            this.tarefas.push({ "titulo": data.titulo, "descricao": data.descricao, "data_criacao": data.data_criacao })
          });
        }
      }
    })
  }

  abrirModal(titulo: string, descricao: string) {
    console.log(titulo + '  ' + descricao);
    $('#staticBackdropLabel').text(titulo);
    $('#descricao_modal').text(descricao);
  }

  addTarefa() {/* .replace(/ /g, '') */
    if (this.titulo.replace(/ /g, '') != '' || this.descricao.replace(/ /g, '') != '') {
      this.rest.novaTarefa(this.titulo, this.descricao).subscribe((data: any) => {
        console.log(data.status);
        if (data.status == 'success') {
          this.titulo = '';
          this.descricao = '';
          $('#message').text(data.message)
          let timer = setTimeout(function () {
            if ($('#message').text() != '')
              $('#message').text('')
            else
            clearInterval(timer)
          }, 5000);
          this.getTarefas()
        }
      })
    }
  }
}
