import { TestBed } from '@angular/core/testing';

import { MenuCounterService } from './menu.counter.service';

describe('MenuCounterService', () => {
  let service: MenuCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
