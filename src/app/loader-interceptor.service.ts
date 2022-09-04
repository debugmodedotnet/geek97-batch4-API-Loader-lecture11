import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('body',req.body);
    console.log('url',req.url);

    // if(req.url.includes('extrapi')){
    //   console.log('login endpoint hitting');
    //   return next.handle(req);
    // }
    // else {

      const newReq = req.clone({
        headers: req.headers.set('content-type','application/json').set('auth-token','99999')
      })

    //   return next.handle(newReq);
    //}

    return next.handle(newReq).pipe(
      retry(2),
      catchError((error:HttpErrorResponse)=>{
        if(error.status == 404){
          console.log(newReq.url+ 'not found');
        }
        return throwError(error);
      }));
  }

}


