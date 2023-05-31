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

  titulo: any = null;
  descricao: any = null;
  dataInicio: any = null;
  dataFinal: any = null;
  idAgenda: any = null;

  constructor(
    private rest: AgendaService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.construirCalendario();
    this.obterAgenda();
    console.log(this.listaAgenda);
    console.log(new Date(this.listaAgenda[0].data_inicio).toLocaleDateString());
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
      if (aux.toLocaleDateString() >= new Date(this.listaAgenda[0].data_inicio).toLocaleDateString()
        && aux.toLocaleDateString() <= new Date(this.listaAgenda[0].data_inicio).toLocaleDateString()) {
        console.log('oi');
        console.log(aux.toLocaleDateString());
        console.log(new Date(this.listaAgenda[0].data_inicio).toLocaleDateString());
        return true;
      }
      //console.log(new Date(this.listaAgenda[i]).toLocaleDateString());
    }
    //console.log(aux.toLocaleDateString());
    return false;
  }

  excluirAgenda(id: any) {
    this.rest.excluirAgenda(id).subscribe((data: any) => {
      console.log(data);
      if (data.status == 'success') {
        this.alert.success('Apagado com sucesso', 'Sucesso!');
      }
      else this.alert.erro("Erro ao realizar a operação");
    });
  }

  editarAgenda(id: any) {

  }

  adicionarAgenda() {

  }

  abrirDia(dia: any) {
    for (let i = 0; i < this.listaAgenda.length; i++){
    }
  }
}
