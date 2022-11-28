import { TestBed } from '@angular/core/testing';

import { StaffingService } from './staffing.service';

describe('StaffingService', () => {
  let service: StaffingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
