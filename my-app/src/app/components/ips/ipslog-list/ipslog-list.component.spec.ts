import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpslogListComponent } from './ipslog-list.component';

describe('IpslogListComponent', () => {
  let component: IpslogListComponent;
  let fixture: ComponentFixture<IpslogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpslogListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IpslogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
