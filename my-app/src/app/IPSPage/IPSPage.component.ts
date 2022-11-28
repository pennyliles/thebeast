import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './IPSPage.component.html',
  styleUrls: ['./IPSPage.component.css']
})
export class IPSPageComponent {

  tableData = [
{
  staff_name: "andrew",
  time_period: "sometime",
  work_week: "sometime",
  hours_worked: "number",
  team_hours_spent: "number",
  community_hours_spent: "number",
  train_PTO_hours_spent: "number"
}
  ]
  
  ;

  ngOnInit(): void {
    this.tableData = this.tableData;
  }
  

}

