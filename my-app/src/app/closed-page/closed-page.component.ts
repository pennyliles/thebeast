import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closed-page',
  templateUrl: './closed-page.component.html',
  styleUrls: ['./closed-page.component.css']
})
export class ClosedPageComponent implements OnInit {


  tableData = [
    {
      uid: "andrew",
      ESP: "sometime",
      closure_data: "sometime",
      employment_status: "number",
      engagement_activities: "number",
      community_closure_reason: "number",
    }
      ]

  constructor() { }

  ngOnInit(): void {
  }

}

