import { Component, OnInit } from '@angular/core';
import { Staffing, StaffingColumns } from 'src/app/models/staffing.model'
import { StaffingService } from 'src/app/services/staffing.service';

@Component({
  selector: 'app-staffing-list',
  templateUrl: './staffing-list.component.html',
  styleUrls: ['./staffing-list.component.css']
})
export class StaffingListComponent implements OnInit {

  displayedColumns: string[] = StaffingColumns.map((col) => col.key);
  dataSource: any = [];
  columnsSchema: any = StaffingColumns;
  name = '';

  constructor(private StaffingService: StaffingService) { }

  ngOnInit(): void {
    this.retrieveLogs();
  }

  retrieveLogs(): void {
    this.StaffingService.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource = data
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  deleteAll(): void {
    this.StaffingService.deleteAll()
      .subscribe({
        next: (res) => {
          this.refreshList()
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  deleteOne(id: any): void {
    this.StaffingService.delete(id)
      .subscribe({
        next: (res) => {
          this.refreshList()
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void {
    this.retrieveLogs();
  }

  editEntry(entry: Staffing) {
    this.StaffingService.update(entry.staff_name, entry)
      .subscribe({
        next: (res) => {
          this.refreshList();
          console.log(res);
        },
        error: (e) => console.error(e)
      })
  }

  // searchName(): void {
  //   this.currentLog = {};
  //   this.currentIndex = -1;

  //   this.StaffingService.get(this.name)
  //     .subscribe({
  //       next: (data) => {
  //         this.Staffings = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
}
