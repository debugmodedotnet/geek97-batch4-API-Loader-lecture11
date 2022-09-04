import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IBook } from 'src/app/entities/book.entity';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId = "";
  book?: IBook;
  constructor(private router : Router, private activatedRoute: ActivatedRoute, private bookservice : BooksService) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((param:any)=>{
    //   this.bookId = param.get('id');
    // })

    this.activatedRoute.paramMap.pipe(
      switchMap((param:any)=>{
       this.bookId = param.get('id');// 2 second
        return this.bookservice.getBook(this.bookId);
      })
    ).subscribe(
      (data:IBook)=>{
           this.book = data; 

      }
    )
  }

  navigateToAllBooks(){
    this.router.navigate(['books']);
  }

}
