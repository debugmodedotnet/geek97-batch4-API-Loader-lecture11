import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  books: FormGroup;
  errorMessage = "";
  count = 100; 
  constructor(private bookService : BooksService, private router : Router) { 
    this.books = new FormGroup({
      Id:new FormControl(""),
      Title: new FormControl("",[Validators.required]),
      Price : new FormControl("",[Validators.required]),
      inStock: new FormControl(true)
    })
  }

  ngOnInit(): void {
  }

  addBook(){
    if(this.books.status == 'VALID'){
        this.books.get('Id')?.setValue(this.count);
        this.count = this.count + 1; 
        this.bookService.addBook(this.books.value).subscribe(
          (response: any)=>{
            if(response == true){
                 this.router.navigate(['books']);
            }
            else {
              this.errorMessage ="Problem adding Books";
              this.books.reset();
            }
          }
        )
    }
  }

}
