import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  tableData = [
    {
      agency_name: "date",
      eval_dates: "andrew",
     date_completed: "sometime",
      staff_name: "sometime",
      job_titles: "number",
     other_roles: "number",
      time_spent: "date",
      start_date: "date",
      end_data: "date",

      hours_worked: "date",
      IPS_training: "date",


    }
      ]


  constructor() { }

  ngOnInit(): void {
  }

}
