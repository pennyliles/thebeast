import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobDevComponent } from './add-job-dev.component';

describe('AddJobDevComponent', () => {
  let component: AddJobDevComponent;
  let fixture: ComponentFixture<AddJobDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
