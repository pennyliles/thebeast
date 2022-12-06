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
      "name": "demographics",
      "elements": [
        {
          "type": "text",
          "name": "uid",
          "title": "What is the client ID (Indicate with an * if they are part of the TCL housing voucher program)?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "phase_of_service",
          "title": "What is the Phase of Service (Job Search, Working, School, Job Search and School, or Working and School)?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "first_date",
          "title": "What is the date of first Face to Face ESP Contact? (MM/DD/YYYY)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "ESP",
          "title": "Who is the ESP Assigned?",
          "isRequired": true
        }
      ],
      "title": "Please tell us about the person level data.",
      "description": "Person Level Data."
    },
    {
      "name": "VR_data",
      "elements": [
        {
          "type": "text",
          "name": "ipe_with_vr",
          "title": "Do they have an IPE with VR? Y/N",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "vr_id",
          "title": "VR Unit ID?",
          "description": "Enter a number.",
          "isRequired": true
        }
      ]
    },
    {
      "name": "clinical",
      "elements": [
        {
          "type": "text",
          "name": "county_id",
          "title": "What is the County ID?",
          "description": "Enter a number.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "current_clinical_services",
          "title": "What is the Current Clinical Services--type of service?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "clinical_services_agency",
          "title": "What is the Clinical Services--Agency(s)?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "employment",
      "elements": [
        {
          "type": "text",
          "name": "benefits",
          "title": "Does this person receive benefits (e.g., SSI, SSDI, Housing Subsidy, Food Stamps, etc.)?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "first_contact",
          "title": "First Face to Face Employer Contact--made by ESP or person receiving IPS services. (MM/DD/YYYY)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "start_date",
          "title": "Start Date of Most Recent Job. (MM/DD/YYYY)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "pre_f_f_contact_date",
          "title": "Date of ESP F-F contact one week PRIOR to job start? (MM/DD/YYYY)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "post_f_f_contact_date",
          "title": "Date of ESP F-F contact within 3 days of job start? (MM/DD/YYYY)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "f_f_contacts",
          "title": "How many times did the ESP see the person F-F for the 1st month on the job?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "employer_name",
          "title": "What was the name of this Employer?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "job_title",
          "title": "Can you provide a Job Title?",
          "isRequired": true
        },

        {
          "type": "text",
          "name": "job_duties",
          "title": "Can you provide a Brief Description of Job Duties?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "hourly_pay",
          "title": "What was the Average Hourly Pay?",
          "description": "Enter a number.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "end_date ",
          "title": "What was the End Date of Most Recent Job loss in IPS? (MM/DD/YYYY)",
          "isRequired": true
        }
      ]
    },
    {
      "name": "education",
      "elements": [
        {
          "type": "text",
          "name": "school_name",
          "title": "What school did they go to?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "cert_degree",
          "title": "What degree did they earn at that school?",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "full_or_part",
          "title": "Were they a full time or part time student?",
          "choices": [
            {
              "value": "Full Time",
              "text": "Full Time"
            },
            {
              "value": "Part Time",
              "text": "Part Time"
            }
          ],
          "isRequired": true
        },
        {
          "type": "text",
          "name": "hours",
          "title": "How many hours did they work?",
          "description": "Enter a number.",
          "isRequired": true
        }
      ]
    }
  ]
}

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  title = 'Person Survery';
  surveyModel!: Model;

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add(function (sender: any, options: any) {
      options.showDataSaving();
      const xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://localhost:3000/person_level');
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
          // Display the "Success" message (pass a string value to display a custom message)
          options.showDataSavingSuccess();
          // Alternatively, you can clear all messages:
          // options.showDataSavingClear();
          window.location.href = 'http://localhost:4200/person';
        } else {
          // Display the "Error" message (pass a string value to display a custom message)
          options.showDataSavingError();
        }
      };
      xhr.send(JSON.stringify(sender.data));
    })
  }

}
