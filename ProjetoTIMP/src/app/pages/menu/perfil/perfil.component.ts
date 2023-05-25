import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/service/session.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nome: any = '';
  email: any = '';
  dataNasc: any = '';
  img: any = '';
  logo: any = null;
  senhaCorreta: boolean = false;
  senhaAtual: any = null;
  senhaNova1: any = null;
  senhaNova2: any = null;
  sidebarExpanded = true;
  resourceForm: FormGroup;
  resetSenha: FormGroup;
  senhaVisivel0: boolean = false;
  senhaVisivel: boolean = false;
  senhaVisivel2: boolean = false;
  senhaConferem: boolean = false;
  confereSenhaChamado:boolean = false;
  alteraSenhaChamado:boolean = false;
  salvarDadosChamado:boolean = false;
  constructor(
    private session: SessionService,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private router: Router
  ) {
    this.resourceForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      dataNasc: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (!this.session.obterSessao()) {
      this.router.navigate(['/']);
    }
    let sessao: any = this.session.obterSessao();
    this.nome = sessao.nome;
    this.email = sessao.email;
    this.dataNasc = sessao.data_nasc;
  }

  enviarImagem() { //envia a imagem 
    let imagem: any = document.getElementById('picture__input');
    imagem = imagem.files;
    var carregarImagem = imagem[0];

    const lerArquivo: FileReader = new FileReader();
    lerArquivo.onload = (fileCarregado: any) => {
      var imagemBase64 = fileCarregado.target.result;
      this.logo = imagemBase64;
    }
    lerArquivo.readAsDataURL(carregarImagem);
  };

  editImage() {//edita a imagem
    this.logo = null
  };

  digitaSenha() {
    this.confereSenhaChamado = true;
    this.session.confereSenha(this.senhaAtual).subscribe((data: any) => {
      if (data.status == 'success') {
        if (data.message) {
          this.senhaCorreta = true;
          this.senhaVisivel0 = false;
        }
        if(!this.senhaCorreta) this.alert.info('Senha incorreta', 'Nop', 1500);
      }
      else this.alert.erro('Erro ao validar a senha');
      this.confereSenhaChamado = false;
    });
  }

  visibilidade0() {
    this.senhaVisivel0 = !this.senhaVisivel0;
  }

  visibilidade() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  visibilidade2() {
    this.senhaVisivel2 = !this.senhaVisivel2;
  }

  atualizarSenha() {
    this.alteraSenhaChamado = true;
    this.session.atualizarSenha(this.senhaNova1).subscribe((data: any) => {
      console.log(data);
      if (data.status == 'success') {
        this.senhaCorreta = false;
        this.senhaAtual = null;
        this.senhaNova1 = null;
        this.senhaNova2 = null;
        this.senhaVisivel0 = false;
        this.senhaVisivel = false;
        this.senhaVisivel2 = false;
        this.senhaConferem = false;
        this.alert.success('Senha alterada com sucesso!');
      }
      else this.alert.erro('Erro ao alterar a senha');
      this.alteraSenhaChamado = false;
    });
  }

  atualizarDados() {
    this.salvarDadosChamado = true;
    if (!(this.nome && this.email && this.dataNasc)) {
      this.alert.erro('Informe os dados obrigatórios', 'Erro');
      this.salvarDadosChamado = false;
      return;
    }
    this.alert.question('Deseja realmente realizar esta alteração?', 'Sim', 'Cancelar').then(r => {
      if (r.isConfirmed) {
        this.session.atualizarDados(this.nome, this.email, this.dataNasc).subscribe((data: any) => {
          if (data.status == "success") {
            this.session.criarSessao(data.data);
            this.alert.success('Dados atualizados com Sucesso!');
          }
          else {
            this.alert.erro('Erro ao atualizar dados, entra em contato com um adiministrador');
          }
        });
      }
      else this.alert.info('Ação Cancelada', 'Cancelado!');
      this.salvarDadosChamado = false;
    });
  }
}
