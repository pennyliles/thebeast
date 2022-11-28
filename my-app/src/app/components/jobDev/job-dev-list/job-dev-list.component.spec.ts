import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDevListComponent } from './job-dev-list.component';

describe('JobDevListComponent', () => {
  let component: JobDevListComponent;
  let fixture: ComponentFixture<JobDevListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDevListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDevListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
