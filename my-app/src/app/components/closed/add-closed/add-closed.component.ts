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
          "name": "uid",
          "title": "What is the UID of the patient?",
          "description": "(Indicate with an * if they are part of the TCL housing voucher program)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "ESP",
          "title": "What is the name of the ESP?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "closure_date",
          "title": "What was the Closure Date?",
          "description": "MM/DD/YYYY format.",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "employment_status",
          "title": "Employment Status: Employed/ Unemployed",
          "choices": [
            {
              "value": "Employed",
              "text": "Employed"
            },
            {
              "value": "Unemployed",
              "text": "Unemployed"
            }
          ],
          "isRequired": true
        },
        {
          "type": "text",
          "name": "engagement_activities",
          "title": "Please list types of Assertive Engagement Activities Utilized.",
          "description": "(e.g., phone calls, texts, sent a letter, home/community visits, coordinated with mental health team, TL/ESP/EPM contact, outreached natural supports)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "closure_reason",
          "title": "Please tell the reason for closure.",
          "description": " (e.g., unable to contact, requested discharge, moved out of of catchment, incarcerated, death, graduation)",
          "isRequired": true
        }
      ],
      "title": "Please tell us about the Closed Cases.",
      "description": "Closed Survey "
    }
  ]
}

@Component({
  selector: 'app-add-closed',
  templateUrl: './add-closed.component.html',
  styleUrls: ['./add-closed.component.css']
})
export class AddClosedComponent implements OnInit {

  title = 'IPS Log Survey';
  surveyModel!: Model;

  // alertResults(sender: { data: any; }) {
  //   const results = JSON.stringify(sender.data);
  //   alert(results);
  //   // saveSurveyResults(
  //   //   "https://your-web-service.com/" + SURVEY_ID,
  //   //   sender.data
  //   // )
  // }
  // ngOnInit() {
  //   const survey = new Model(surveyJson);
  //   survey.onComplete.add(this.alertResults);
  //   this.surveyModel = survey;
  // }

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(function (sender: any, options: any) {
      options.showDataSaving();
      const xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://localhost:8080/closed');
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
          // Display the "Success" message (pass a string value to display a custom message)
          options.showDataSavingSuccess();
          // Alternatively, you can clear all messages:
          // options.showDataSavingClear();
          window.location.href = 'http://localhost:8081/closed';
        } else {
          // Display the "Error" message (pass a string value to display a custom message)
          options.showDataSavingError();
        }
      };
      xhr.send(JSON.stringify(sender.data));
    })
  }

}
