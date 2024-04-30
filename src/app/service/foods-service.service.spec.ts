import { TestBed } from '@angular/core/testing';

import { FoodsServiceService } from './foods-service.service';

describe('FoodsServiceService', () => {
  let service: FoodsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
