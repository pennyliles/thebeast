import { Component, OnInit } from '@angular/core';
import { Model, StylesManager } from "survey-core";

// const SURVEY_ID = 1;

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  "title": "Program Information",
  "description": "Tell us about your team!",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "question1",
      "title": "What is your team name?"
     },
     {
      "type": "text",
      "name": "question3",
      "title": "Where is your team?"
     },
     {
      "type": "text",
      "name": "question2",
      "title": "What is your phone number"
     },
     {
      "type": "text",
      "name": "question4",
      "title": "What is your user email?"
     },
     {
      "type": "text",
      "name": "question5",
      "title": "What is your team start up date?"
     },
     {
      "type": "text",
      "name": "question6",
      "title": "What is your catchment area?"
     },
     {
      "type": "text",
      "name": "question7",
      "title": "What is the name of your team lead?"
     },
     {
      "type": "text",
      "name": "question8",
      "title": "What is the phone number of your team lead?"
     },
     {
      "type": "text",
      "name": "question9",
      "title": "What is your team lead email?"
     },
     {
      "type": "text",
      "name": "question10",
      "title": "What is the name of your agency leadership contact?"
     },
     {
      "type": "text",
      "name": "question11",
      "title": "What is the phone number of your agency contact"
     },
     {
      "type": "text",
      "name": "question12",
      "title": "What is the email of your agency contact"
     },
     {
      "type": "text",
      "name": "question13",
      "title": "What is your funding source"
     },
     {
      "type": "checkbox",
      "name": "question14",
      "choices": [
       "item1",
       "item2",
       "item3"
      ]
     }
    ],
    "title": "Please tell us about your team",
    "description": "Team information "
   }
  ]
 };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
