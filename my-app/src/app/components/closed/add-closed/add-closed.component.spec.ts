
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClosedComponent } from './add-closed.component';




describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddClosedComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddClosedComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'get-started-angular'`, () => {
  //   const fixture = TestBed.createComponent(ClientsurveyComponent);
  //   const clientsurvey = fixture.componentInstance;
  //   expect(clientsurvey.title).toEqual('get-started-angular');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AddClosedComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('get-started-angular app is running!');
  });
});