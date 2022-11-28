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
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonleveldataComponent,
    StaffingleveldataComponent,
    JobdevelopmentlogComponent,
    IpsComponent,
    ClosedComponent,
    UserlistComponent
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