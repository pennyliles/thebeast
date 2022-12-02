import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpslogDetailsComponent } from './ipslog-details.component';

describe('IpslogDetailsComponent', () => {
  let component: IpslogDetailsComponent;
  let fixture: ComponentFixture<IpslogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpslogDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IpslogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
