import { TestBed } from '@angular/core/testing';

import { JobDevService } from './job-dev.service';

describe('JobDevService', () => {
  let service: JobDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
