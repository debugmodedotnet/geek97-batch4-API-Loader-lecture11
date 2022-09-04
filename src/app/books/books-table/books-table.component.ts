import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/entities/book.entity';


@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BooksTableComponent implements OnChanges {

 books: IBook[] = [];
 @Input() books$? : Observable<IBook[]>; 
 @Output() sendToDetailsEvent = new EventEmitter<string>();
 constructor(private cd : ChangeDetectorRef){}

  navigateToDetails(Id:string){
    this.sendToDetailsEvent.emit(Id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.books$ != undefined){
      this.books$.subscribe(data=>{
        this.books = data;
        console.log(this.books);
        this.cd.markForCheck();
      })
    }
  }
}











// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
// import { Observable, Observer, Subscription } from 'rxjs';
// import { IBook } from 'src/app/entities/book.entity';


// @Component({
//   selector: 'app-books-table',
//   templateUrl: './books-table.component.html',
//   styleUrls: ['./books-table.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class BooksTableComponent implements OnChanges, OnDestroy {
//   @Input() books$? : Observable<IBook[]>; 
//   books : IBook[] = [];
//   @Output() sendToDetailsEvent = new EventEmitter<string>();
//   booksubscription$? : Subscription; 
//    observer : Observer<IBook[]> = {
//     next:(data:any)=>{this.books = data; this.cd.markForCheck()},
//     error:(err:any)=>{ console.log(err)},
//     complete: ()=>{}
//    } 

//  constructor(private cd : ChangeDetectorRef){

//  }

//   navigateToDetails(Id:string){
//     this.sendToDetailsEvent.emit(Id);
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     this.booksubscription$ = this.books$?.subscribe(this.observer);
//   }

//   ngOnDestroy(): void {
//     if(this.booksubscription$){
//       this.booksubscription$.unsubscribe();
//     }
//   }
// }

// import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
// import { Observable, Observer, Subscription } from 'rxjs';
// import { IBook } from 'src/app/entities/book.entity';


// @Component({
//   selector: 'app-books-table',
//   templateUrl: './books-table.component.html',
//   styleUrls: ['./books-table.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class BooksTableComponent{
//   @Input() books$? : Observable<IBook[]>; 
//   @Output() sendToDetailsEvent = new EventEmitter<string>();

//   navigateToDetails(Id:string){
//     this.sendToDetailsEvent.emit(Id);
//   }

// }

// parent is passing observable 

// 1. subscribng 
// 2. you will have to unsubscribe 
// 3. if data changes , you need to run change detector manually 

