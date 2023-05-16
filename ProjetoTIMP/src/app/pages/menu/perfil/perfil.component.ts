import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nome: any = '';
  email: any = '';
  dataNasc: any = '';
  img: any = '';
  logo: any = null;
  senhaCorreta:boolean = false;
  senhaAtual:any = null;
  senhaNova1:any = null;
  senhaNova2:any = null;
  sidebarExpanded = true;
  constructor() { }

  enviarImagem() { //envia a imagem 
    let imagem:any = document.getElementById('picture__input');
    imagem = imagem.files;
    var carregarImagem = imagem[0];
    const lerArquivo: FileReader = new FileReader();
    lerArquivo.onload = (fileCarregado:any) => {
      var imagemBase64 = fileCarregado.target.result;
      this.logo = imagemBase64
    }
    console.log(lerArquivo.readAsDataURL(carregarImagem))
    lerArquivo.readAsDataURL(carregarImagem);
  };

  editImage() {//edita a imagem
    this.logo = null
  };

  digitaSenha(){
    
  }
}
