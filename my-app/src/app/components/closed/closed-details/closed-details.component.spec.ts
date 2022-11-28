import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedDetailsComponent } from './closed-details.component';

describe('ClosedDetailsComponent', () => {
  let component: ClosedDetailsComponent;
  let fixture: ComponentFixture<ClosedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
