import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedListComponent } from './closed-list.component';

describe('ClosedListComponent', () => {
  let component: ClosedListComponent;
  let fixture: ComponentFixture<ClosedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
