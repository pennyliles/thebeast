import { Component, OnInit } from '@angular/core';


import { Model, StylesManager } from "survey-core";


// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "Staffing level data",
  "description": "Please fill out the staffing level data below",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "question1",
      "title": "What is the name of the agency?"
     },
     {
      "type": "text",
      "name": "question2",
      "title": "What is the fidelity evaluation date "
     },
     {
      "type": "text",
      "name": "question3",
      "title": "What was the date completed"
     },
     {
      "type": "text",
      "name": "question4",
      "title": "What is the name of the staff who have worked on the IPS team over the last 6 months:"
     },
     {
      "type": "text",
      "name": "question5",
      "title": "What are the Job Titles of the staff"
     },
     {
      "type": "text",
      "name": "question6",
      "title": "If the person has another role on the team, list it here and % of time spent in each role."
     },
     {
      "type": "text",
      "name": "question7",
      "title": "Date started working on the IPS team"
     },
     {
      "type": "text",
      "name": "question8",
      "title": "Date employment ended (if applicable)"
     },
     {
      "type": "text",
      "name": "question9",
      "title": "How many hours worked each week on the IPS Team?"
     },
     {
      "type": "text",
      "name": "question10",
      "title": "What IPS trainings have they attended?"
     }
    ],
    "title": "Please tell us about your staff ",
    "description": "Staff level data"
   }
  ]
 }

 @Component({
  selector: 'app-staffingleveldata',
  templateUrl: './staffingleveldata.component.html',
  styleUrls: ['./staffingleveldata.component.css']
})

export class StaffingleveldataComponent implements OnInit {
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
