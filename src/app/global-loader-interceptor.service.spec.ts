import { TestBed } from '@angular/core/testing';

import { GlobalLoaderInterceptorService } from './global-loader-interceptor';

describe('GlobalLoaderInterceptorService', () => {
  let service: GlobalLoaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalLoaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
