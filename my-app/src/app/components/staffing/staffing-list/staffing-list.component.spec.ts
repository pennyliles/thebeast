import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingListComponent } from './staffing-list.component';

describe('StaffingListComponent', () => {
  let component: StaffingListComponent;
  let fixture: ComponentFixture<StaffingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
