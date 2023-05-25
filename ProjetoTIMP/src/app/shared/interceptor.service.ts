import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { CominucacaoService } from './service/cominucacao.service';
import { AlertService } from './service/alert.service';
@Injectable()
export class InterceptorService {

  constructor(
    private alert: AlertService,
    private comu: CominucacaoService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.status == 500) {
            this.alert.erro('Erro interno do servidor', "Entre em contato com um administrador");
          }
          else
            this.alert.erro('Ooops...', error.message, 3000);
          this.comu.filter('loaded');
          return throwError(errorMsg);
        })
      )
  }
}
