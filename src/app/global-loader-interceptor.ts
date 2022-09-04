import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { GlobalLoaderService } from './global-loader.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderInterceptorService implements HttpInterceptor {

  constructor(private loadService: GlobalLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadService.nextLoading(true); 
    return next.handle(req).pipe(
      delay(1000),
      finalize(()=> this.loadService.nextLoading(false))
    )
  }
}
