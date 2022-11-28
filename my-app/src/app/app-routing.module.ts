import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIpslogComponent } from './components/ips/add-ipslog/add-ipslog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IpslogDetailsComponent } from './components/ips/ipslog-details/ipslog-details.component';
import { IpslogListComponent } from './components/ips/ipslog-list/ipslog-list.component';
import { ClosedListComponent } from './components/closed/closed-list/closed-list.component';
import { ClosedDetailsComponent } from './components/closed/closed-details/closed-details.component';
import { AddClosedComponent } from './components/closed/add-closed/add-closed.component';
import { JobDevListComponent } from './components/jobDev/job-dev-list/job-dev-list.component';
import { JobDevDetailsComponent } from './components/jobDev/job-dev-details/job-dev-details.component';
import { AddJobDevComponent } from './components/jobDev/add-job-dev/add-job-dev.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { StaffingListComponent } from './components/staffing/staffing-list/staffing-list.component';
import { StaffingDetailsComponent } from './components/staffing/staffing-details/staffing-details.component';
import { AddStaffingComponent } from './components/staffing/add-staffing/add-staffing.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'closed', component: ClosedListComponent },
  { path: 'closed/:id', component: ClosedDetailsComponent },
  { path: 'addClosed', component: AddClosedComponent },
  { path: 'jobDev', component: JobDevListComponent },
  { path: 'jobDev/:id', component: JobDevDetailsComponent },
  { path: 'addjobDev', component: AddJobDevComponent },
  { path: 'person', component: PersonListComponent },
  { path: 'person/:id', component: PersonDetailsComponent },
  { path: 'addPerson', component: AddPersonComponent },
  { path: 'ipslog', component: IpslogListComponent },
  { path: 'ipslog/:id', component: IpslogDetailsComponent },
  { path: 'addIPS', component: AddIpslogComponent },
  { path: 'staffing', component: StaffingListComponent },
  { path: 'staffing/:id', component: StaffingDetailsComponent },
  { path: 'addStaffing', component: AddStaffingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
