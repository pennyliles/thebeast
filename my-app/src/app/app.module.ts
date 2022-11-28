import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SurveyModule } from "survey-angular-ui";
import { AppComponent } from './app.component';
import { TableModule } from 'smart-webcomponents-angular/table';

import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app-routing.module';
import { PersonleveldataComponent } from './personleveldata/personleveldata.component';
import { StaffingleveldataComponent } from './staffingleveldata/staffingleveldata.component';
import { JobdevelopmentlogComponent } from './jobdevelopmentlog/jobdevelopmentlog.component';
import { IpsComponent } from './ips/ips.component';
import { ClosedComponent } from './closed/closed.component';
import { IPSPageComponent } from './IPSPage/IPSPage.component';
import { ClosedPageComponent } from './closed-page/closed-page.component';
import { JobPageComponent } from './job-page/job-page.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { StaffPageComponent } from './staff-page/staff-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonleveldataComponent,
    StaffingleveldataComponent,
    JobdevelopmentlogComponent,
    IpsComponent,
    ClosedComponent,
    IPSPageComponent,
    ClosedPageComponent,
    JobPageComponent,
    PersonPageComponent,
    StaffPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    SurveyModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }