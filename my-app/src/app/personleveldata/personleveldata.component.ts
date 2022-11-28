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
      "name": "uid",
      "title": "What is the client ID # (Indicate with an * if they are part of the TCL housing voucher program)"
     },
     {
      "type": "text",
      "name": "phase_of_service",
      "title": "What is the Phase of Service (Job Search, Working, School, Job Search and School, or Working and School)"
     },
     {
      "type": "text",
      "name": "first_date",
      "title": "What is the date of first Face to Face ESP Contact"
     },
     {
      "type": "text",
      "name": "ESP",
      "title": "who is the ESP Assigned"
     },
     {
      "type": "text",
      "name": "ipe_with_vr",
      "title": "Do they have an IPE with VR? Y/N"
     },
     {
      "type": "text",
      "name": "vr_id",
      "title": "VR Unit ID"
     },
     {
      "type": "text",
      "name": "county_id",
      "title": "What is the County ID"
     },
     {
      "type": "text",
      "name": "current_clinical_services",
      "title": "What is the Current Clinical Services--type of service"
     },
     {
      "type": "text",
      "name": "clinical_services_agency",
      "title": "What is the Clinical Services--Agency(s)"
     },
     {
      "type": "dropdown",
      "name": "benefits",
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
      "name": "first_contact",
      "title": "First Face to Face Employer Contact--made by ESP or person receiving IPS services(date)"
     },
     {
      "type": "text",
      "name": "start_date",
      "title": "Start Date of Most Recent Job (date)"
     },
     {
      "type": "text",
      "name": "pre_f_f_contact_date",
      "title": "Date of ESP F-F contact one week PRIOR to job start?"
     },
     {
      "type": "text",
      "name": "post_f_f_contact_date",
      "title": "Date of ESP F-F contact within 3 days of job start?"
     },
     {
      "type": "text",
      "name": "f_f_contacts",
      "title": "How many times did the ESP see the person F-F for the 1st month on the job?"
     },
     {
      "type": "text",
      "name": "employer_name",
      "title": "What was the name of this Employer "
     },
     {
      "type": "text",
      "name": "job_title",
      "title": "Can you provide a Job Title"
     },

     {
      "type": "text",
      "name": "job_duties",
      "title": "Can you provide a Brief Description of Job Duties"
     },
     {
      "type": "text",
      "name": "hourly_pay",
      "title": "What was the Average Hourly Pay"
     },
     {
      "type": "text",
      "name": "end_date ",
      "title": "What was the End Date of Most Recent Job loss in IPS"
     },
     {
      "type": "text",
      "name": "school_name",
      "title": "What school did they go to?"
     },
     {
      "type": "text",
      "name": "cert_degree",
      "title": "What degree did they earn at that school?"
     },
     {
      "type": "text",
      "name": "full_or_part",
      "title": "Were they a full time or part time student?"
     },
     {
      "type": "text",
      "name": "hours",
      "title": "How many hours did they work?"
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
