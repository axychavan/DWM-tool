import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { NgToastService } from 'ng-angular-popup';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  user: any;
  records: any;
  ctmap: any;

  clients: any;
  tasks: any;
  task_list: any = [];
  //todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  currMonth = formatDate(new Date(), 'yyyy-MM', 'en');

  empidItem = localStorage.getItem('empid');
  passwordItem = localStorage.getItem('password');
  loginData: any = {
    "empid": this.empidItem,
    "password": this.passwordItem
  }

  month: any;

  addRecord: any = {
    "empid": this.empidItem
  };
  employeeRecords: any;
  employeeSpecificRecords: any;
  sortRecords: any;

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private toast: NgToastService,
  ) {
    console.log("Current month = ", this.currMonth);

    this.userService.loginUser(this.loginData).subscribe((res) => {
      console.log("Login response", res);
      this.user = res;
    })

    this.userService.getRecords().subscribe((res) => {
      console.log("Employee Records", res);
      this.employeeRecords = res;

      this.employeeSpecificRecords = this.employeeRecords.filter(function (res) {
        const empidItem = localStorage.getItem('empid');
        return res.empid == empidItem;
      });
      console.log("Employee Specific Records", this.employeeSpecificRecords);
    })

    this.userService.getClients().subscribe((res) => {
      console.log("List of Clients", res);
      this.clients = res;
    })

    this.userService.getTasks().subscribe((res) => {
      console.log("List of Tasks", res);
      this.tasks = res;
    })

    this.userService.getCtmap().subscribe((res) => {
      this.ctmap = res;
      console.log("CTMap Response", this.ctmap);
    })
  }

  searchRecords() {
    console.log("Search Clicked")

    console.log("Selected Month", this.month)

    this.sortRecords = this.employeeSpecificRecords;
    console.log("Sorted Records", this.sortRecords)
  }

  add_Record() {
    console.log("Record added successfully");

    this.userService.addRecord(this.addRecord).subscribe(res => {
      console.log("Record added", res);
      window.location.reload();
    })
    this.toast.success({ detail: "Success", summary: 'Record added successfully', duration: '3000' });
  }

  selectClient(clients) {
    //console.log(clients.target.value);

    this.task_list = this.ctmap.filter(e => e.cl_name == clients.target.value);
    //console.log("List of tasks : ", this.task_list);
  }

  delete_Record(item: { recid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.userService.deleteRecord(item.recid).subscribe(response => {
        this.records = this.records.filter((item: { id: any; }) => item.id !== item.id);
      });
      window.location.reload();
    }
  }

  download_csv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Daily Work Management records',
      useBom: true,
      headers: ["ID", "Date", "Employee ID", "Client", "Task", "Duration", "Description"],
      eol: '\n'
    };
    new ngxCsv(this.employeeSpecificRecords, "dwm_report", options);
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ngOnInit(): void { }

}
