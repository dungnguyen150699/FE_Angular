import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { error } from 'console';


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
    return next.handle(req)
    .pipe(
      tap({
        // next :(res:HttpEvent<any>) => {
        //   console.log("NEXT Interceptor catch",res, typeof res);
        // },
        error: (err: any) =>{
          console.log("ERROR Interceptor catch", err , typeof err);
          if(!err) this.toastr.error(err.error?.message,'SomeThing went wrong', {timeOut: 5000});
          if(err instanceof HttpErrorResponse && err.status >= 300){
            this.toastr.error(err.error?.message,'Fail', {timeOut: 5000});
            if(err.status === 401) this.route.navigate(["login"]);
          }
        }
      })
    );
  }
}
