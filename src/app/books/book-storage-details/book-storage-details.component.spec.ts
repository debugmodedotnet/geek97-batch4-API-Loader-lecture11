import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStorageDetailsComponent } from './book-storage-details.component';

describe('BookStorageDetailsComponent', () => {
  let component: BookStorageDetailsComponent;
  let fixture: ComponentFixture<BookStorageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStorageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStorageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
