import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsurveyComponent } from './clientsurvey';

import { TeaminfoComponent } from './teaminfo';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientsurvey', component: ClientsurveyComponent },
  { path: 'teaminfo', component: TeaminfoComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);