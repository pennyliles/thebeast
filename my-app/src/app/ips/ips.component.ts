import { Component, OnInit } from '@angular/core';
import { Model, StylesManager } from "survey-core";


// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "IPS Activity log",
  "description": "Please fill out information about the client below",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "staff_name",
      "title": "What is the name of the IPS staff"
     },
     {
      "type": "text",
      "name": "time_period",
      "title": "What was the time period"
     },
     {
      "type": "text",
      "name": "work_week",
      "title": "What is the dates of the work week"
     },
     {
      "type": "text",
      "name": "hours_worked",
      "title": "Hours worked in week on the IPS Team"
     },
     {
      "type": "text",
      "name": "team_hours_spent",
      "title": "Hours spent in community with clients face-to-face, job development, meetings at VR, and driving time"
     },
     {
      "type": "text",
      "name": "community_hours_spent",
      "title": "# Hours spent in treatment team meetings and vocational unit meetings, writing notes/ documentation, phone calls, and supervision in office"
     },
     {
      "type": "text",
      "name": "train_PTO_hours_spent",
      "title": "Hours in spent in training or PTO"
     }
    ],
    "title": "Please fill out the IPS activity log for each week",
    "description": "work week"
   }
  ]
 }

 @Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.css']
})
export class IpsComponent implements OnInit {
  title = 'My First Survey';
  surveyModel!: Model;
  alertResults (sender: { data: any; }) {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }
  ngOnInit() {    
    const survey = new Model(surveyJson);
    survey.onComplete.add(this.alertResults);
    this.surveyModel = survey;
  }
}

// function saveSurveyResults(url, json) {
//   const request = new XMLHttpRequest();
//   request.open('POST', url);
//   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//   request.addEventListener('load', () => {
//     // Handle "load"
//   });
//   request.addEventListener('error', () => {
//     // Handle "error"
//   });
//   request.send(JSON.stringify(json));
// }
