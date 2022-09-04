import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookStorageDetailsComponent } from './book-storage-details/book-storage-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksTableComponent } from './books-table/books-table.component';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    BookAddComponent,
    BookStorageDetailsComponent,
    BooksTableComponent,
    BooksGridComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
