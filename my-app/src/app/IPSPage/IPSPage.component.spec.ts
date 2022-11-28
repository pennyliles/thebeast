import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPSPageComponent } from './IPSPage.component';

describe('IPSPageComponent', () => {
  let component: IPSPageComponent;
  let fixture: ComponentFixture<IPSPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPSPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPSPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
