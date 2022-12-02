import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingDetailsComponent } from './staffing-details.component';

describe('StaffingDetailsComponent', () => {
  let component: StaffingDetailsComponent;
  let fixture: ComponentFixture<StaffingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
