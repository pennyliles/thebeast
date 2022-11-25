import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSurveyComponent } from './client-survey.component';

describe('ClientSurveyComponent', () => {
  let component: ClientSurveyComponent;
  let fixture: ComponentFixture<ClientSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
