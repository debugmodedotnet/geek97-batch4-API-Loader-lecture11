import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/entities/book.entity';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksGridComponent{

  @Input() books$? : Observable<IBook[]>;
  @Output() sendToDetailsEvent = new EventEmitter<string>();
  navigateToDetails(Id:string){
    this.sendToDetailsEvent.emit(Id);
  }
}

// Dumb Components 
// Presetaitional component
