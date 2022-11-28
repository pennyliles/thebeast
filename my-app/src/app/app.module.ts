import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'smart-webcomponents-angular/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { SurveyModule } from "survey-angular-ui";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIpslogComponent } from './components/add-ipslog/add-ipslog.component';
import { IpslogDetailsComponent } from './components/ipslog-details/ipslog-details.component';
import { IpslogListComponent } from './components/ipslog-list/ipslog-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIpslogComponent,
    IpslogDetailsComponent,
    IpslogListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
