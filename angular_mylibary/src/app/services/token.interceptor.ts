import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService,private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    return next.handle(request)
    .pipe(
      tap((event: HttpEvent<any>) =>{
        if(event instanceof HttpResponse && event.status >= 300){
          this.toastr.error("Fail",event.body?.error?.message,{ timeOut:5000 });
          if(event.status == 401){
            this.route.navigate(['login']);
          }
        }
      }))
  }
}
