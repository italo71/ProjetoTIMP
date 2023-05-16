import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message:any = null, title:any = 'Sucesso!'){
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
    })
  }
  info(message:any, title:any){
    Swal.fire({
      title: title,
      text: message,
      icon: 'info',
    })
  }
}
