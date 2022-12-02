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
          "title": "What is the name of the agency?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "eval_dates",
          "title": "When was the Fidelity Evaluation dates?",
          "description": "MM/DD/YYYY",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "date_completed",
          "title": "What was the date the evaluation completed?",
          "description": "MM/DD/YYYY",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "staff_name",
          "title": "What was the name of the staff who have worked on the IPS team over the last 6 months?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "job_titles",
          "title": "What were their job titles?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "other_roles",
          "title": "If the person has another role on the team, list it here and % of time spent in each role.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "start_date",
          "title": "What was the date they started working on the IPS team?",
          "description": "MM/DD/YYYY",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "end_data",
          "title": "Date employment ended (if applicable)",
          "description": "MM/DD/YYYY",
        },
        {
          "type": "text",
          "name": "hours_worked",
          "title": "How many hours worked each week on the IPS Team?",
          "description": "Enter a number.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "IPS_training",
          "title": "What IPS trainings have they attended?",
          "isRequired": true
        }
      ],
      "title": "Below are question about the staff and their work."
    }
  ]
}

@Component({
  selector: 'app-add-staffing',
  templateUrl: './add-staffing.component.html',
  styleUrls: ['./add-staffing.component.css']
})
export class AddStaffingComponent implements OnInit {

  title = 'Staffing Survery';
  surveyModel!: Model;

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(function (sender: any, options: any) {
      options.showDataSaving();
      const xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://localhost:3000/staffing');
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
          // Display the "Success" message (pass a string value to display a custom message)
          options.showDataSavingSuccess();
          // Alternatively, you can clear all messages:
          // options.showDataSavingClear();
          window.location.href = 'http://localhost:4200/staffing';
        } else {
          // Display the "Error" message (pass a string value to display a custom message)
          options.showDataSavingError();
        }
      };
      xhr.send(JSON.stringify(sender.data));
    })
  }
}
