import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService{

  private loader$ : BehaviorSubject<boolean>;

  constructor() {
    this.loader$ = new BehaviorSubject<boolean>(false);
   }

   public isLoading(): Observable<boolean>{
     return this.loader$; 
   }
   public nextLoading(v: boolean):void {
      this.loader$.next(v);
   }
}
