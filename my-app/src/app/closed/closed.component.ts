import { Component, OnInit } from '@angular/core';



import { Model, StylesManager } from "survey-core";


// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "Closed level data",
  "description": "Please fill out the survey below about closed data",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "question1",
      "title": "What is the ID # (Indicate with an * if they are part of the TCL housing voucher program)"
     },
     {
      "type": "text",
      "name": "question2",
      "title": "What is the name of the ESP"
     },
     {
      "type": "text",
      "name": "question3",
      "title": "What was the Closure Date"
     },
     {
      "type": "text",
      "name": "question4",
      "title": "Status:  Employed/ Unemployed"
     },
     {
      "type": "text",
      "name": "question5",
      "title": "Please list types of Assertive Engagement Activities Utilized (e.g., phone calls, texts, sent a letter, home/community visits, coordinated with mental health team, TL/ESP/EPM contact, outreached natural supports)"
     },
     {
      "type": "text",
      "name": "question6",
      "title": "Please tell the reason for closure (e.g., unable to contact, requested discharge, moved out of of catchment, incarcerated, death, graduation)"
     }
    ],
    "title": "Please tell us about the closed cases ",
    "description": "Closed data "
   }
  ]
 }


 @Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})

export class ClosedComponent implements OnInit {
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
