import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared/service/session.service';
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
  d_btn: boolean = false;
  constructor(
    private rest: TarefasService,
    private comu: CominucacaoService,
    private session: SessionService,
  ) { }

  ngOnInit(): void {
    if (this.rest.obterTarefasStorage() == null)
      this.getTarefas();
    else {
      let t = this.rest.obterTarefasStorage()
      if (t != null)
        this.tarefas = JSON.parse(t)
    }
  }

  apareceBtn() {
    this.d_btn = !this.d_btn
  }

  getTarefas() {
    this.rest.obterTarefas().subscribe((data: any) => {
      if (data.status == "success") {
        this.rest.limparTarefas();
        if (data.data.length != 0) {
          this.tarefas = [];
          data.data.forEach((data: any) => {
            this.tarefas.push({ "titulo": data.titulo, "descricao": data.descricao, "data_criacao": data.data_criacao, "id": data.id });
          });
          this.rest.tarefasStorage(JSON.stringify(this.tarefas));
        }
      }
    });
  }

  abrirModal(titulo: string, descricao: string, id: any) {
    $('#staticBackdropLabel').text(titulo);
    $('#descricao_modal').text(descricao);
    $('#controle_tarefa').text(id);
  }

  apagaTarefa() {
    let id = $('#controle_tarefa').text();
    if (id == null || id == '')
      return;
    this.rest.apagarTarefa(parseInt(id)).subscribe((data: any) => {
      console.log(data)
      if (data.status == 'seccess') {
        for (let i = 0; i < this.tarefas.length; i++) {
          if (this.tarefas[i].id == id) {
            this.tarefas.splice(i, 1);
            this.rest.tarefasStorage(this.tarefas);
            console.log(this.tarefas);
            break;
          }
        }
      }
    });
  }

  closeModalTarefa() {
    $('#controle_tarefa').text('');
  }

  addTarefa() {
    if (this.titulo.replace(/ /g, '') != '' || this.descricao.replace(/ /g, '') != '') {
      this.tarefas.push({ "titulo": this.titulo, "descricao": this.descricao, "data_criacao": new Date })
      this.rest.tarefasStorage(JSON.stringify(this.tarefas))
      this.rest.novaTarefa(this.titulo, this.descricao).subscribe((data: any) => {
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
        }
      })
    }
  }



}
