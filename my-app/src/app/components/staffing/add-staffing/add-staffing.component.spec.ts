import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffingComponent } from './add-staffing.component';

describe('AddStaffingComponent', () => {
  let component: AddStaffingComponent;
  let fixture: ComponentFixture<AddStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
