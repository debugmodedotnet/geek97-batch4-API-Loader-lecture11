import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription, take } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IBook } from '../entities/book.entity';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: IBook[] = [];
  bookSubscription?: Subscription;
  books$? : Observable<IBook[]>; 
  isLoading = true; 
  isTable = true;
  isGrid = false; 
  constructor(private bookservice: BooksService, private router : Router, 
    private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    
    // this.bookSubscription = this.bookservice.getBooks().subscribe(
    //   (data: IBook[]) => {
    //     this.books = data;
    //     console.log(this.books);
    //     this.isLoading = false; 
    //   }
    // )

    this.books$ = this.bookservice.getBooks();
    // this.activatedroute.data.subscribe(b =>{
    //   console.log(b);
    //   this.books$ = of(b['books']); 
    // })
    
  }

  showTable(){
    this.isTable = true; 
    this.isGrid = false ; 

  }

  loadcomponet(){

  }
  showGrid(){
    this.isGrid = true;
    this.isTable = false; 
  }
  navigateToDetails(Id:string){
    console.log(Id);
    localStorage.setItem('idtodetial',Id);
    this.router.navigate(['books',Id]);
  }

  ngOnDestroy(): void {
    if(this.bookSubscription != undefined){
      this.bookSubscription.unsubscribe();
    }
  }

}


// smart component 
// container component 