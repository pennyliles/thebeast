import { Component, OnInit } from '@angular/core';
import { Closed, ClosedColumns } from 'src/app/models/closed.model'
import { ClosedService } from 'src/app/services/closed.service';

@Component({
  selector: 'app-closed-list',
  templateUrl: './closed-list.component.html',
  styleUrls: ['./closed-list.component.css'],
})
export class ClosedListComponent implements OnInit {

  displayedColumns: string[] = ClosedColumns.map((col) => col.key);
  dataSource: any = [];
  columnsSchema: any = ClosedColumns;

  name = '';

  constructor(private ClosedService: ClosedService) { }

  ngOnInit(): void {
    this.retrieveLogs();
  }

  retrieveLogs(): void {
    this.ClosedService.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  deleteAll(): void {
    this.ClosedService.deleteAll()
      .subscribe({
        next: (res) => {
          this.refreshList()
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  deleteOne(id: any): void {
    this.ClosedService.delete(id)
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

  editEntry(entry: Closed) {
    this.ClosedService.update(entry.uid, entry)
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

  //   this.ClosedService.get(this.name)
  //     .subscribe({
  //       next: (data) => {
  //         this.Closeds = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
}
