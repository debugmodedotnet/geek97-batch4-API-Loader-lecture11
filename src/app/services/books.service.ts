import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBook } from '../entities/book.entity';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  login(): Observable<any>{
    let apiUrl = environment.baseApiUrl + "/logabcbcbcbin";
    return this.http.get(apiUrl).pipe(
      tap((data:any)=>{console.log(data)}),
      delay(1000),
      catchError(error => {
        return throwError(()=>{
          return new Error(error)
        })
      })
    )
  }

  getBooks(): Observable<IBook[]> {
    const apiurl = environment.baseApiUrl + "/books";
    return this.http.get(apiurl).pipe(
      tap((res: any) => { console.log(res) }),
      delay(2000),
      catchError(error => {
        return throwError(() => {
          return new Error(error)
        })
      })
    );
  }


  getBook(Id : string): Observable<IBook> {
    const apiurl = environment.baseApiUrl + "/books/"+ Id;
    return this.http.get(apiurl).pipe(
      tap((res: any) => { console.log(res) }),
      catchError(error => {
        return throwError(() => {
          return new Error(error)
        })
      })
    );
  }

  addBook(book:IBook):Observable<any>{

    let apiUrl = environment.baseApiUrl + "/books";
    // const headers = {
    //   'content-type': 'application/json'
    // };
    console.log(book);
    return this.http.post(apiUrl,book).pipe(
      tap((data:any)=>{console.log(data)}),
      catchError(error => {
        return throwError(()=>{
          return new Error(error)
        })
      })
    )

  }
}
