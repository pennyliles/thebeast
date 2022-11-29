import { Component, OnInit } from '@angular/core';
import { Model, StylesManager } from "survey-core";

// const SURVEY_ID = 1;
StylesManager.applyTheme("defaultV2");
const surveyJson = {
  "title": "IPS Activity log",
  "description": "Please fill out information about the client below",
  "logoPosition": "right",
  "surveyShowDataSaving": true,
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "staff_name",
          "title": "IPS Staff Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "time_period",
          "title": "What was the time period?",
          "description": "MM/DD/YYYY",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "work_week",
          "title": "When was the work week?",
          "description": "MM/DD/YYYY",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "hours_worked",
          "title": "Hours worked in week on the IPS Team.",
          "description": "Enter a number.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "team_hours_spent",
          "title": "Hours spent in community with clients face-to-face, job development, meetings at VR, and driving time.",
          "description": "Enter a number.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "community_hours_spent",
          "title": "Hours spent in treatment team meetings and vocational unit meetings, writing notes/ documentation, phone calls, and supervision in office.",
          "description": "Enter a number.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "train_PTO_hours_spent",
          "title": "Hours in spent in training or PTO.",
          "description": "Enter a number.",
          "isRequired": true
        }
      ],
      "title": "Please fill out the IPS activity log for each week"
    }
  ]
}

@Component({
  selector: 'app-ips',
  templateUrl: './add-ipslog.component.html',
  styleUrls: ['./add-ipslog.component.css']
})

export class AddIpslogComponent implements OnInit {
  title = 'IPS Log Survey';
  surveyModel!: Model;

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(function (sender: any, options: any) {
      options.showDataSaving();
      const xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://localhost:8080/ipslog');
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
          // Display the "Success" message (pass a string value to display a custom message)
          options.showDataSavingSuccess();
          // Alternatively, you can clear all messages:
          // options.showDataSavingClear();
          window.location.href = 'http://localhost:8081/ipslog';
        } else {
          // Display the "Error" message (pass a string value to display a custom message)
          options.showDataSavingError();
        }
      };
      xhr.send(JSON.stringify(sender.data));
    })
  }
}