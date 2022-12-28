import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-admin-records',
  templateUrl: './admin-records.component.html',
  styleUrls: ['./admin-records.component.css']
})
export class AdminRecordsComponent implements OnInit {

  searchInput: any = {};
  fetchedRecords: any;

  constructor(private AdminService: AdminService) { }

  searchRecords() {
    this.AdminService.postRecords(this.searchInput).subscribe((res) => {
      this.fetchedRecords = res;

      this.fetchedRecords = this.fetchedRecords.map(({ empid, date, attendance, cl_name, task, duration, description }) => ({ empid, date, attendance, cl_name, task, duration, description }));

      console.log("fetched records", this.fetchedRecords);
    })
  }

  download() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Records',
      useBom: true,
      headers: ["Employee_ID", "Date", "Attendance", "Client Name", "Task", "Duration", "Description"],
      eol: '\n'
    };
    new ngxCsv(this.fetchedRecords, "records", options);
  }

  ngOnInit(): void { }

}
