import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsurveyComponent } from './clientsurvey';
import { TeaminfoComponent } from './teaminfo';
import { AppComponent } from './app.component';

// surveys 
import { StaffingleveldataComponent } from './staffingleveldata/staffingleveldata.component';
import { JobdevelopmentlogComponent } from './jobdevelopmentlog';
import { ClosedComponent } from './closed';
import { IpsComponent } from './ips';
import { PersonleveldataComponent } from './personleveldata';
import { UserlistComponent } from './userlist';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientsurvey', component: ClientsurveyComponent },
  { path: 'teaminfo', component: TeaminfoComponent },
  {path: 'staffingleveldata', component: StaffingleveldataComponent},
  {path: 'jobdevelopmentlog', component: JobdevelopmentlogComponent},
  {path: 'closed', component: ClosedComponent},
  {path: 'ips', component: IpsComponent},
  {path: 'personleveldata', component: PersonleveldataComponent},
  {path: 'userlist', component: UserlistComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);