import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/service/agenda.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  listaAgenda: Array<any> = [];
  d_btn: boolean = false;
  listaAgendaDia: Array<any> = [];

  salvando: boolean = false;

  titulo: any = null;
  descricao: any = null;
  dataInicio: any = null;
  dataFinal: any = null;
  idAgenda: any = null;

  hoje: any = new Date();

  constructor(
    private rest: AgendaService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.construirCalendario();
    this.obterAgenda();
  }

  obterAgenda() {
    this.listaAgenda = [];
    if (this.rest.getAgendaStorage() != null) {
      this.listaAgenda = this.rest.getAgendaStorage();
      return;
    }
    this.refresh(true);
  }

  refresh(initial: boolean = false) {
    let aux = this.listaAgenda;
    this.rest.obterAgenda().subscribe((data: any) => {
      if (data.status == 'success') {
        let dados: Array<any> = data.data;
        this.listaAgenda = dados;
        this.rest.agendaStorage(this.listaAgenda);
        if (!initial)
          this.alert.success("Dados atualizados com sucesso!");
      }
      else {
        if (!initial)
          this.alert.info("Voltando a exibir os dados antigos", "Sem dados");
        this.listaAgenda = aux;
      }
    });
  }

  apareceBtn() {
    this.d_btn = !this.d_btn;
  }

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6;   // sábado

    // Vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Vai somando +1 até chegarmos no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  retornaAno(v: any) {
    let aux = new Date(v);

    return this.gerarMes(aux.getMonth() + 1) + '/' + aux.getFullYear();
  }

  gerarMes(num: any) {
    let mNum = parseInt(num);
    switch (mNum) {
      case (1): return 'Jan'; break;
      case (2): return 'Fev'; break;
      case (3): return 'Mar'; break;
      case (4): return 'Abr'; break;
      case (5): return 'Mai'; break;
      case (6): return 'Jun'; break;
      case (7): return 'Jul'; break;
      case (8): return 'Ago'; break;
      case (9): return 'Set'; break;
      case (10): return 'Out'; break;
      case (11): return 'Nov'; break;
      case (12): return 'Dez'; break;
      default: return null; break;
    }
  }

  alterarMes(offsetMes: number) {
    this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
    this.dataAtual = new Date(this.dataAtual.getTime());
    this.construirCalendario();
  }

  formatarDataBRL(v: any) {
    let d = new Date(v);
    return d.toLocaleString('pt-BR', {});
  }

  temAgenda(dia: any): boolean {
    let aux = new Date(dia);
    for (let i = 0; i < this.listaAgenda.length; i++) {
      if (aux.toLocaleDateString() >= new Date(this.listaAgenda[i].data_inicio).toLocaleDateString()
        && aux.toLocaleDateString() <= new Date(this.listaAgenda[i].data_inicio).toLocaleDateString()) {
        return true;
      }
    }
    return false;
  }

  excluirAgenda(id: any) {
    this.rest.excluirAgenda(id).subscribe((data: any) => {
      if (data.status == 'success') {
        this.alert.success('Apagado com sucesso', 'Sucesso!');
      }
      else this.alert.erro("Erro ao realizar a operação");
    });
  }

  editarAgenda(id: any) {
    this.listaAgendaDia.forEach(e => {
      if (e.id == id) {
        this.titulo = e.titulo;
        this.descricao = e.descricao;
        this.dataInicio = new Date(e.data_inicio).toISOString().split('T')[0]
        this.dataFinal = new Date(e.data_final).toISOString().split('T')[0];
        this.idAgenda = e.id;
        $('#modal').removeClass('none');
        return;
      }
    });
  }

  abrirAddAgenda() {
    this.titulo = null;
    this.descricao = null;
    this.dataInicio = null;
    this.dataFinal = null;
    $('#modal').removeClass('none');
    let dia: any = $('#diaSelec').val();
    if (dia != null && dia != '' && dia != undefined) {
      this.dataInicio = new Date(dia).toISOString().split('T')[0];
      this.dataFinal = new Date(dia).toISOString().split('T')[0];
    }
  }

  fecharModal() {
    this.titulo = null;
    this.descricao = null;
    this.dataInicio = null;
    this.dataFinal = null;
    this.idAgenda = null;
    $('#modal').addClass('none');
  }

  adicionarAgenda() {
    this.salvando = true;
    if (this.titulo && this.dataInicio && this.dataFinal) {
      this.rest.salvarAgenda(this.titulo, this.descricao, this.dataInicio, this.dataFinal, this.idAgenda).subscribe((data: any) => {
        console.log(data);
        if (data.status == 'success') {
          if (!this.idAgenda) {
            this.listaAgenda.push(data.data);
            this.rest.agendaStorage(this.listaAgenda);
            this.construirCalendario();
          }
          else {
            for (let i = 0; i < this.listaAgenda.length; i++) {
              if (this.listaAgenda[i].id == this.idAgenda) {
                this.listaAgenda[i].titulo = this.titulo;
                this.listaAgenda[i].descricao = this.descricao;
                this.listaAgenda[i].data_inicio = this.dataInicio;
                this.listaAgenda[i].data_final = this.dataFinal;
              }
            }
          }
          this.fecharModal();
          this.alert.success('Agenda salva com sucesso!');
        }
        this.salvando = false;
      });
    }
    else this.alert.erro('Erro ao salvar agenda'); this.salvando = false;
  }

  abrirDia(dia: any, id: any) {
    $('#diaSelec').val(dia);
    $('.dia_clicado').removeClass('dia_clicado');
    $('#dia' + id).addClass('dia_clicado');
    console.log(dia);
    console.log(this.hoje);
    dia = new Date(dia).toLocaleDateString();
    let lista: Array<any> = [];
    for (let i = 0; i < this.listaAgenda.length; i++) {
      if (dia == new Date(this.listaAgenda[i].data_inicio).toLocaleDateString()) {
        lista.push(this.listaAgenda[i]);
      }
    }
    this.listaAgendaDia = lista;
  }
}
