import { TestBed } from '@angular/core/testing';

import { ClosedService } from './closed.service';

describe('ClosedService', () => {
  let service: ClosedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
