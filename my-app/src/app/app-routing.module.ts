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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
