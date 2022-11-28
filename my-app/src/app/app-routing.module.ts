import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

// surveys 
import { StaffingleveldataComponent } from './staffingleveldata/staffingleveldata.component';
import { JobdevelopmentlogComponent } from './jobdevelopmentlog';
import { ClosedComponent } from './closed';
import { IpsComponent } from './ips';
import { PersonleveldataComponent } from './personleveldata';
import { IPSPageComponent } from './IPSPage';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'staffingleveldata', component: StaffingleveldataComponent},
  {path: 'jobdevelopmentlog', component: JobdevelopmentlogComponent},
  {path: 'closed', component: ClosedComponent},
  {path: 'ips', component: IpsComponent},
  {path: 'personleveldata', component: PersonleveldataComponent},
  {path: 'IPSPage', component: IPSPageComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);