import { Component, OnInit } from '@angular/core';

import { Model, StylesManager } from "survey-core";


// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "Person Level Data",
  "description": "Please fill out information about the client below",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "question1",
      "title": "What is the client ID # (Indicate with an * if they are part of the TCL housing voucher program)"
     },
     {
      "type": "text",
      "name": "question2",
      "title": "What is the Phase of Service (Job Search, Working, School, Job Search and School, or Working and School)"
     },
     {
      "type": "text",
      "name": "question3",
      "title": "What is the date of first Face to Face ESP Contact"
     },
     {
      "type": "text",
      "name": "question4",
      "title": "who is the ESP Assigned"
     },
     {
      "type": "text",
      "name": "question5",
      "title": "Do they have an IPE with VR? Y/N"
     },
     {
      "type": "text",
      "name": "question6",
      "title": "VR Unit ID"
     },
     {
      "type": "text",
      "name": "question7",
      "title": "What is the County ID"
     },
     {
      "type": "text",
      "name": "question8",
      "title": "What is the Current Clinical Services--type of service"
     },
     {
      "type": "text",
      "name": "question9",
      "title": "What is the Clinical Services--Agency(s)"
     }
    ],
    "title": "Please tell us about the person level data ",
    "description": "Person level data"
   }
  ]
 }

 @Component({
  selector: 'app-personleveldata',
  templateUrl: './personleveldata.component.html',
  styleUrls: ['./personleveldata.component.css']
})

export class PersonleveldataComponent  implements OnInit {
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
