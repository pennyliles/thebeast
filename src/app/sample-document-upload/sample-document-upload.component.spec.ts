import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDocumentUploadComponent } from './sample-document-upload.component';

describe('SampleDocumentUploadComponent', () => {
  let component: SampleDocumentUploadComponent;
  let fixture: ComponentFixture<SampleDocumentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDocumentUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
