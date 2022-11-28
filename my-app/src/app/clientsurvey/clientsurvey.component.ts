import { Component, OnInit } from '@angular/core';
import { Model, StylesManager } from "survey-core";
// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "Client survey",
  "description": "Please fill out information about the client below",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "checkbox",
      "name": "question1",
      "title": "Note whether the client has been enrolled in ACT services for the last 90 days ",
      "choices": [
       {
        "value": "item3",
        "text": "Yes"
       },
       {
        "value": "item4",
        "text": "No"
       }
      ]
     },
     {
      "type": "checkbox",
      "name": "question3",
      "title": "For each client with a co-occurring substance use disorder, indicate whether they are in an \"early\" or \"late\" stage of change readiness.",
      "choices": [
       {
        "value": "item1",
        "text": "Early"
       },
       {
        "value": "item2",
        "text": "Late"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "question2",
      "title": "Does the client receive integrated substance abuse services directly from the ACT team? Indicate \"individual\" (more than 20 mins per week), \"group (more than one time per month), or \"both.\" If the client receives substance abuse services from non-ACT providers, note it as \"non-ACT.'",
      "choices": [
       {
        "value": "item1",
        "text": "Indivdual"
       },
       {
        "value": "item2",
        "text": "Group"
       },
       {
        "value": "item3",
        "text": "Both"
       },
       {
        "value": "item4",
        "text": "Non-ACT"
       }
      ]
     },
     {
      "type": "boolean",
      "name": "question4",
      "title": "Does the client live in a supervised residential setting where medication monitoring services are received from the non-ACT staff? "
     },
     {
      "type": "dropdown",
      "name": "question5",
      "title": "Does the client receive employment and education services directly from the ACT team? If receives employment and educational services from non-ACT providers, note \"non-ACT\"",
      "choices": [
       {
        "value": "item1",
        "text": "Yes"
       },
       {
        "value": "item2",
        "text": "No"
       },
       {
        "value": "item3",
        "text": "Non-ACT"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "question6",
      "title": "If the client currently employed and/or enrolled in school? If employed, indicate whether it is competitive employment, school or other. ",
      "choices": [
       {
        "value": "item1",
        "text": "Competitive employment"
       },
       {
        "value": "item2",
        "text": "School"
       },
       {
        "value": "item3",
        "text": "Other"
       }
      ]
     },
     {
      "type": "text",
      "name": "question7",
      "title": "For working client , specify where they work or type N/A"
     },
     {
      "type": "text",
      "name": "question8",
      "title": "For working clients, specify the type of positions they currently hold or enter N/A"
     },
     {
      "type": "boolean",
      "name": "question9",
      "title": "For working clients, indicate whether they got the job themselves or the team assisted with getting the potion. Indicate self or team",
      "labelTrue": "Team",
      "labelFalse": "Self"
     },
     {
      "type": "dropdown",
      "name": "question10",
      "title": "Does the client receive psychiatric rehabilitation services directly from the ACT team? If they receive psychiatric rehabilitation services from non-ACT providers, note \"non-ACT.\"",
      "choices": [
       {
        "value": "item1",
        "text": "Yes"
       },
       {
        "value": "item2",
        "text": "none"
       },
       {
        "value": "item3",
        "text": "Non-ACT"
       }
      ]
     },
     {
      "type": "text",
      "name": "question11",
      "title": "Does the client receive formal or manualized wellness management and recovery services directly from the ACT team? If yes, please specify the type of WMR service used and whether it is a group or individual "
     },
     {
      "type": "dropdown",
      "name": "question12",
      "title": "Does the client attend clubhouse, day treatment, drop-in center services or a partial hospitalization program",
      "choices": [
       {
        "value": "item1",
        "text": "Clubhouse"
       },
       {
        "value": "item2",
        "text": "Day treatment"
       },
       {
        "value": "item3",
        "text": "drop-in center services"
       },
       {
        "value": "item4",
        "text": "Partial hospitalization program"
       }
      ]
     },
     {
      "type": "text",
      "name": "question15",
      "title": "Has the client received individual and/or group psychotherapy in the past year? ( see definition) If yes, please specify the type of therapeutic strategies used. If sees a non-ACT provider for therapy, note \"non-ACT.\""
     },
     {
      "type": "boolean",
      "name": "question16",
      "title": "Does the client receive health/lifestyle intervention services directly from the ACT"
     },
     {
      "type": "dropdown",
      "name": "question17",
      "title": "Indicate whether the client's current housing is in a residence where 25% or more of the other resident or tenants likely have a known disability(see definition). If the client is currently unsheltered (street homeless) or emergency sheltered, please select homeless",
      "choices": [
       {
        "value": "item1",
        "text": "homeless"
       },
       {
        "value": "item2",
        "text": "sheltered"
       },
       {
        "value": "item3",
        "text": "Living with 25% or more of other tenants likely have a known disability "
       }
      ]
     },
     {
      "type": "boolean",
      "name": "question18",
      "title": "Indicate whether the client is currently receiving a housing subsidy or is on a waitlist for a subsidy",
      "labelTrue": "Waitlist",
      "labelFalse": "Subsidy"
     },
     {
      "type": "text",
      "name": "question19",
      "title": "If the client does NOT receive a housing subsidy do they pay 30% of their income or less on safe housing, including rent and utilities (NOTE: exclude"
     },
     {
      "type": "dropdown",
      "name": "question20",
      "title": "Please Indicate whether treatment participation is condition of their housing/residence and further note if the requirement is that they receive any services (note\"any,\" or specifically ACT)",
      "choices": [
       {
        "value": "item1",
        "text": "Any"
       },
       {
        "value": "item2",
        "text": "None"
       },
       {
        "value": "item3",
        "text": "ACT"
       }
      ]
     },
     {
      "type": "comment",
      "name": "question21",
      "title": "Is the client on involuntary outpatient commitment or conditional release? If yes please specify which one"
     },
     {
      "type": "comment",
      "name": "question22",
      "title": "Does the client have a representative payee? If so, indicate if agency/team, natural support, or independent organization/individual serves as the client's rep payee. Also note whether money is disbursed weekly or more often(for example an individual receives an allowance weekly or two times per week)"
     },
     {
      "type": "boolean",
      "name": "question24",
      "title": "Does this client have a legal guardian?"
     },
     {
      "type": "comment",
      "name": "question25",
      "title": "Please indicate how individuals are receiving oral psychiatric medication:(1) on their own; (2) from natural supports; (3) from residential staff; (4) from ACT Team. If from ACT Team, please also indicate the number of oral medications the individual receives at a given time (e.g., daily, 2X/wk, weekly, monthly)"
     },
     {
      "type": "text",
      "name": "question23",
      "title": "Is the client on an antipsychotic depot medication (i.e., injection)? Please state the medication name."
     },
     {
      "type": "text",
      "name": "question26",
      "title": "Indicate the number of contacts the team had with clients' natural supports this past month( see definition). Please indicate the number of contacts (i.e., do NOT answer yes or no)"
     }
    ],
    "title": "Please tell us about your client",
    "description": "Client info"
   }
  ]
 };

 @Component({
  selector: 'app-clientsurvey',
  templateUrl: './clientsurvey.component.html',
  styleUrls: ['./clientsurvey.component.css']
})
export class ClientsurveyComponent implements OnInit {
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

