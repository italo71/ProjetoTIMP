import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message: any = null, title: any = 'Sucesso!', timer: number = 1500) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      timer: timer,
      showConfirmButton:false
    })
  }
  info(message: any, title: any, timer: number = 2000) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'info',
      timer: timer,
      showConfirmButton:false
    })
  }
  erro(message: any, title: any = 'Ooops...', timer: number = 2000) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      timer: timer,
      showConfirmButton:false
    })
  }
  question(question: any, btnConfirm: any, btnDecline: any) {
    return Swal.fire({
      title: question,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: btnConfirm,
      denyButtonText: btnDecline,
    })
  }
}
