import { TestBed } from '@angular/core/testing';

import { IpslogService } from './ipslog.service';

describe('IpslogService', () => {
  let service: IpslogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpslogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
