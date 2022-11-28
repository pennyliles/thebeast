import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDevDetailsComponent } from './job-dev-details.component';

describe('JobDevDetailsComponent', () => {
  let component: JobDevDetailsComponent;
  let fixture: ComponentFixture<JobDevDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDevDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDevDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
