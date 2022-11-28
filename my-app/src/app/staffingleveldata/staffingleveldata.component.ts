import { Component, OnInit } from '@angular/core';


import { Model, StylesManager } from "survey-core";


// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "Please enter the staff data below",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "agency_name",
      "title": "What is the name of the agency?"
     },
     {
      "type": "text",
      "name": "eval_dates",
      "title": "When was the Fidelity Evaluation dates?"
     },
     {
      "type": "text",
      "name": "date_completed",
      "title": "What was the date completed"
     },
     {
      "type": "text",
      "name": "staff_name",
      "title": "What was the name of the staff who have worked on the IPS team over the last 6 months?"
     },
     {
      "type": "text",
      "name": "job_titles",
      "title": "What were their job titles"
     },
     {
      "type": "text",
      "name": "other_roles",
      "title": "If the person has another role on the team, list it here and % of time spent in each role."
     },
     {
      "type": "text",
      "name": "start_data",
      "title": "What was the date they started working on the IPS team"
     },
     {
      "type": "text",
      "name": "end_data",
      "title": "Date employment ended (if applicable)"
     },
     {
      "type": "text",
      "name": "hours_worked",
      "title": "How many hours worked each week on the IPS Team?"
     },
     {
      "type": "text",
      "name": "IPS_training",
      "title": "What IPS trainings have they attended?"
     }
    ],
    "title": "Below are question about the staff and their work "
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
