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
      ipe_with_vr: "sometime",
      vr_id: "number",
     county_id: "number",
      current_clinical_services: "date",
      clinical_services_agency: "date"
    }
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
