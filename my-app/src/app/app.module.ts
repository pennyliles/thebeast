import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SurveyModule } from "survey-angular-ui";
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ClientsurveyComponent } from './clientsurvey/clientsurvey.component';
import { TeaminfoComponent } from './teaminfo';
import { appRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsurveyComponent,
    TeaminfoComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }