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
     },
     {
      "type": "dropdown",
      "name": "question10",
      "title": "Does this person receive benefits (e.g., SSI, SSDI, Housing Subsidy, Food Stamps, etc.)?",
      "choices": [
       {
        "value": "item1",
        "text": "SSI"
       },
       {
        "value": "item2",
        "text": "SSDI"
       },
       {
        "value": "item3",
        "text": "Housing Subsidy"
       },
       {
        "value": "item4",
        "text": "Food Stamps"
       },
       {
        "value": "item5",
        "text": "Other"
       }
      ]
     },
     {
      "type": "text",
      "name": "question11",
      "title": "First Face to Face Employer Contact--made by ESP or person receiving IPS services(date)"
     },
     {
      "type": "text",
      "name": "question12",
      "title": "Start Date of Most Recent Job (date)"
     },
     {
      "type": "text",
      "name": "question13",
      "title": "Date of ESP F-F contact one week PRIOR to job start?"
     },
     {
      "type": "text",
      "name": "question14",
      "title": "Date of ESP F-F contact within 3 days of job start?"
     },
     {
      "type": "text",
      "name": "question15",
      "title": "How many times did the ESP see the person F-F for the 1st month on the job?"
     },
     {
      "type": "text",
      "name": "question16",
      "title": "What was the name of this Employer "
     },
     {
      "type": "text",
      "name": "question17",
      "title": "Can you provide a Brief Description of Job Duties"
     },
     {
      "type": "text",
      "name": "question18",
      "title": "What was the Average Hourly Pay"
     },
     {
      "type": "text",
      "name": "question19",
      "title": "What was the End Date of Most Recent Job loss in IPS"
     },
     {
      "type": "text",
      "name": "question20",
      "title": "What school did they go to? "
     },
     {
      "type": "text",
      "name": "question21",
      "title": "What degree did they earn at that school"
     },
     {
      "type": "text",
      "name": "question22",
      "title": "Were they a full time or part time student"
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
