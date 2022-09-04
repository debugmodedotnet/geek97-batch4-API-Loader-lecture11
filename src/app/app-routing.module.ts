import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { abc } from './services/books-resolver.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
