import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {


  tableData = [
    {
      uid: "date",
      phase_of_service: "andrew",
      first_date: "sometime",
      ESP: "sd",
      ipe_with_vr: "sometime",
      vr_id: "number",
     county_id: "number",
      current_clinical_services: "date",
      clinical_services_agency: "date",
      benefits : "something",
      first_contact: "fis",
      start_date: "as",
      pre_f_f_contact_date: "as",
      post_f_f_contact_date: "as",
      f_f_contacts: "as",
      employer_name: "as",
      job_title: "as",
      job_duties: "as",
      hourly_pay: "$15",
      end_date: "asd",
      school_name: "asd",
      cert_degree: "as",
      full_or_part: "as",
      hours: "As"
    }
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
