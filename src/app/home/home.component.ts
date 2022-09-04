import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

   observer = {
    next : (data:any)=>{console.log(data)},
    error: (err:any)=>{ console.log(err)},
    complete:()=>{console.log('complete')}
  }

  loginSubscription? : Subscription;
  constructor(private bookservice: BooksService) {

   }

  ngOnInit(): void {
    this.loginSubscription = this.bookservice.login().subscribe(this.observer)
  }

  ngOnDestroy(): void {
    if(this.loginSubscription != undefined){
      this.loginSubscription.unsubscribe();
    }
  }

}
