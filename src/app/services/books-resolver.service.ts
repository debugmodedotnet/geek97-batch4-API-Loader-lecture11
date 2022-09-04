import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { BooksService } from './books.service';
 
@Injectable({
  providedIn: 'root'
})
export class BooksResolverService implements Resolve<any> {
  constructor(private bookService : BooksService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.bookService.getBooks().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}

export class abc implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //business logic 
    return true; 
   // read token 
    return false; 
  }
}