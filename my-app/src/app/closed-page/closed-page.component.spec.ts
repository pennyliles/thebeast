import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedPageComponent } from './closed-page.component';

describe('ClosedPageComponent', () => {
  let component: ClosedPageComponent;
  let fixture: ComponentFixture<ClosedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
