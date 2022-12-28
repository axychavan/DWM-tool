import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  currMonth = formatDate(new Date(), 'yyyy-MM', 'en');
  startdate = formatDate(new Date(), 'yyyy-MM-01', 'en');
  enddate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor() { }

  downloadRecords() {
    console.log("Download button Clicked !!!")
  }

  ngOnInit(): void {
  }

}
