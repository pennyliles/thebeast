import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSurveyComponent } from './client-survey/client-survey.component';
import { SampleDocumentUploadComponent } from './sample-document-upload/sample-document-upload.component';



const routes: Routes = [
  {path: 'Client Survey', component: ClientSurveyComponent},
  {path: 'Sample Document Upload', component: SampleDocumentUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
