import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInterceptorComponent } from './global-interceptor.component';

describe('GlobalInterceptorComponent', () => {
  let component: GlobalInterceptorComponent;
  let fixture: ComponentFixture<GlobalInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalInterceptorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
