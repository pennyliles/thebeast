import { Component, OnInit } from '@angular/core';
import { Model, StylesManager } from "survey-core";


// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "Job development log",
  "description": "Please fill out information about the client below",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "uid",
      "title": "What is the ID # of the client"
     },
     {
      "type": "text",
      "name": "employment_goal",
      "title": "What are the Individual's Employment Goal?"
     },
     {
      "type": "text",
      "name": "employer_contacted",
      "title": "Employer Contacted"
     },
     {
      "type": "text",
      "name": "employer_hiring",
      "title": "Does the Employer Contact has hiring authority? Y/N"
     },
     {
      "type": "text",
      "name": "contact_method",
      "title": "How Contacted? (i.e., in person, via telephone, email, individual served made contact, etc.)"
     },
     {
      "type": "text",
      "name": "date_of_contact",
      "title": "Date of Contact"
     },
     {
      "type": "text",
      "name": "nature_of_visit",
      "title": "Nature of Visit: First Meeting/ Second Meeting/ Ongoing"
     },
     {
      "type": "text",
      "name": "visit_desc",
      "title": "description of the visit"
     }
    ],
    "title": "Please fill out the Job development log below",
    "description": "Job development information"
   }
  ]
 }

 @Component({
  selector: 'app-jobdevelopmentlog',
  templateUrl: './jobdevelopmentlog.component.html',
  styleUrls: ['./jobdevelopmentlog.component.css']
})
export class JobdevelopmentlogComponent implements OnInit {
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
