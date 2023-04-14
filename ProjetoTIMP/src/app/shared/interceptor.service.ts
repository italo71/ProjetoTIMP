import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class InterceptorService {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Aqui você pode modificar a requisição antes de ser enviada
    // por exemplo, adicionar um header ou um token de autenticação
    /* const cors = request.clone({
      headers: request.headers.set('Access-Control-Allow-Origin', `*`)
    }); */
    // Depois, você deve passar a requisição para o próximo handler
    return next.handle(request);
  }
}
