import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css']
})
export class JobPageComponent implements OnInit {

  tableData = [
    {
      date_participated: "date",
      uid: "andrew",
      employment_goal: "sometime",
      employer_contacted: "sometime",
      employer_hiring: "number",
      contact_method: "number",
      date_of_contact: "date",
      nature_of_visit: "date",
      visit_desc: "date",
    }
      ]


  constructor() { }

  ngOnInit(): void {
  }

}
