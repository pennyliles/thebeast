import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { SurveyModule } from "survey-angular-ui";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIpslogComponent } from './components/ips/add-ipslog/add-ipslog.component';
import { IpslogListComponent } from './components/ips/ipslog-list/ipslog-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddJobDevComponent } from './components/jobDev/add-job-dev/add-job-dev.component';
import { JobDevListComponent } from './components/jobDev/job-dev-list/job-dev-list.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { ClosedListComponent } from './components/closed/closed-list/closed-list.component';
import { StaffingListComponent } from './components/staffing/staffing-list/staffing-list.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { AddStaffingComponent } from './components/staffing/add-staffing/add-staffing.component';
import { AddClosedComponent } from './components/closed/add-closed/add-closed.component';
import { DemographicsComponent } from './components/person/person-list/demographics/demographics.component';
import { VrComponent } from './components/person/person-list/vr/vr.component';
import { ClinicalComponent } from './components/person/person-list/clinical/clinical.component';
import { EmploymentComponent } from './components/person/person-list/employment/employment.component';
import { EducationComponent } from './components/person/person-list/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIpslogComponent,
    IpslogListComponent,
    HomepageComponent,
    AddJobDevComponent,
    JobDevListComponent,
    PersonListComponent,
    ClosedListComponent,
    StaffingListComponent,
    AddPersonComponent,
    AddStaffingComponent,
    AddClosedComponent,
    DemographicsComponent,
    VrComponent,
    ClinicalComponent,
    EmploymentComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SurveyModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
