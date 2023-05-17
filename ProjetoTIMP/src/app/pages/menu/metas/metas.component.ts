import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/service/alert.service';
import { MetaService } from 'src/app/shared/service/meta.service';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  sidebarExpanded = true;
  metas: any[] = [];
  //modal
  meta: object = {};
  //controle
  idMeta: any = null;
  salvando: boolean = false;
  //ngModels
  titulo: any = null;
  descricao: any = null;
  dataInicio: any = null;
  dataFinal: any = null;
  constructor(
    private rest: MetaService,
    private alert: AlertService
  ) {
  }
  ngOnInit(): void {
    this.rest.obterMetasCadastradas().subscribe((data: any) => {
      if (data.status == 'success') {
        data.data.forEach((e: any) => {
          this.metas.push(e);
        });
      }
    })
  }
  salvarAlteracoes() {
    if (this.salvando)
      return;
    if (this.idMeta) {
      for (let i = 0; i < this.metas.length; i++) {
        if (this.metas[i].id == this.idMeta) {
          if (this.metas[i].titulo == this.titulo && this.metas[i].meta == this.descricao && this.formatDataInput(this.metas[i].data_inicio) == this.dataInicio && this.formatDataInput(this.metas[i].data_final) == this.dataFinal) {
            this.alert.info("Altere ao menos um dado antes de realizar a alteração", "Atenção")
          }
          break;
        }
      }
    }

    if (this.titulo && this.descricao && this.dataInicio && this.dataFinal) {
      this.salvando = true;
      this.rest.cadastrarAlterarMeta(this.titulo, this.limpaString(this.descricao), this.dataInicio, this.dataFinal, this.idMeta).subscribe((data: any) => {
        if (data.status == 'success') {
          this.alert.success('Alteração Salva com Sucesso');
          console.log(data.data.length);
          if (data.data.length > 0) {
            console.log(data.data[0]);
            this.metas.push(data.data[0]);
          }
        }
        this.salvando = false;
      });
    }
    else this.alert.info('Informe todos os campos antes de continuar', 'Atenção!');
  }

  apagarMeta() {
    if (!this.idMeta) {
      this.limparCampos();
      return;
    }
    this.alert.question('Relmente deseja deletar a Meta?', 'SIM', 'NÃO').then((data: any) => {
      if (data.isConfirmed) {
        this.rest.apagarMeta(this.idMeta).subscribe((data: any) => {
          console.log(data);
          if (data.status == 'success') {
            for (let i = 0; i < this.metas.length; i++) {
              if (this.metas[i].id == this.idMeta) {
                this.metas.splice(i, 1);
              }
            }
            this.alert.success("Meta apagada com Sucesso!", "Sucesso!");
          }
          else { this.alert.erro("Erro ao apagar Meta! Tente novamente"); }
        })
      }
      else this.alert.info('Operação Cancelada', 'Cancelado!')
    });
  }

  abrirMeta(id: any) {
    for (let i = 0; i < this.metas.length; i++) {
      if (this.metas[i].id == id) {
        this.titulo = this.metas[i].titulo;
        this.descricao = this.metas[i].meta;
        this.dataInicio = this.formatDataInput(this.metas[i].data_inicio);
        this.dataFinal = this.formatDataInput(this.metas[i].data_final);
        this.idMeta = this.metas[i].id;
        return;
      }
    }
  }

  /* 
   */
  limpaString(s: any) {
    return s.replace(/'/g, '')
  }

  limparCampos() {
    this.titulo = null;
    this.descricao = null;
    this.dataInicio = null;
    this.dataFinal = null;
    this.idMeta = null;
  }

  formatDataInput(v: any) {
    let auxData = new Date(v);
    let r = auxData.getFullYear() + '-' + (((auxData.getMonth() + 1).toString.length == 1) ? '0' + (auxData.getMonth() + 1) : (auxData.getMonth() + 1)) + '-' + ((auxData.getDay()).toString.length == 1 ? '0' + auxData.getDay() : auxData.getDay());
    return r;
  }

  formataData(v: any) {
    let auxData = new Date(v);
    let r = ((auxData.getDay()).toString.length == 1 ? '0' + auxData.getDay() : auxData.getDay()) + '/' + (((auxData.getMonth() + 1).toString.length == 1) ? '0' + (auxData.getMonth() + 1) : (auxData.getMonth() + 1)) + '/' + auxData.getFullYear();
    return r;
  }
}
