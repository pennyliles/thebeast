import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIpslogComponent } from './components/ips/add-ipslog/add-ipslog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IpslogListComponent } from './components/ips/ipslog-list/ipslog-list.component';
import { ClosedListComponent } from './components/closed/closed-list/closed-list.component';
import { AddClosedComponent } from './components/closed/add-closed/add-closed.component';
import { JobDevListComponent } from './components/jobDev/job-dev-list/job-dev-list.component';
import { AddJobDevComponent } from './components/jobDev/add-job-dev/add-job-dev.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { DemographicsComponent } from './components/person/person-list/demographics/demographics.component';
import { ClinicalComponent } from './components/person/person-list/clinical/clinical.component';
import { EducationComponent } from './components/person/person-list/education/education.component';
import { EmploymentComponent } from './components/person/person-list/employment/employment.component';
import { VrComponent } from './components/person/person-list/vr/vr.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { StaffingListComponent } from './components/staffing/staffing-list/staffing-list.component';
import { AddStaffingComponent } from './components/staffing/add-staffing/add-staffing.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'closed', component: ClosedListComponent },
  { path: 'addClosed', component: AddClosedComponent },
  { path: 'jobDev', component: JobDevListComponent },
  { path: 'addjobDev', component: AddJobDevComponent },
  { path: 'person', component: PersonListComponent },
  { path: 'addPerson', component: AddPersonComponent },
  { path: 'ipslog', component: IpslogListComponent },
  { path: 'addIPS', component: AddIpslogComponent },
  { path: 'staffing', component: StaffingListComponent },
  { path: 'addStaffing', component: AddStaffingComponent },
  { path: 'demographics', component: DemographicsComponent },
  { path: 'clinical', component: ClinicalComponent },
  { path: 'education', component: EducationComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'vr', component: VrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
