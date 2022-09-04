import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksResolverService } from '../services/books-resolver.service';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  { path: '', component: BooksComponent},
  {path:'add',component:BookAddComponent},
  {path:':id',component:BookDetailsComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
