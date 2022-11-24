import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgToastService } from 'ng-angular-popup';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  user: any;
  employeeRecords: any;
  employeeSpecificRecords: any;
  sortRecords: any;

  startdate: any;
  enddate: any;

  records: any;
  ctmap: any;
  clients: any;
  tasks: any;
  task_list: any = [];
  month: any;
  currMonth = formatDate(new Date(), 'yyyy-MM', 'en');

  empidItem = localStorage.getItem('empid');
  passwordItem = localStorage.getItem('password');
  loginData: any = {
    "empid": this.empidItem,
    "password": this.passwordItem
  }

  addRecord: any = {
    "empid": this.empidItem
  };

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  constructor(
    private userService: UserService,
    private toast: NgToastService,
  ) { 
    this.month = this.currMonth;

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
    console.log("Start Date : ", this.startdate);
    console.log("End Date : ", this.enddate);

    this.sortRecords = this.employeeSpecificRecords;   
    
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
      headers: ["ID", "Employee ID", "Date", "Attendance", "Client", "Task", "Duration", "Description"],
      eol: '\n'
    };
    new ngxCsv(this.employeeSpecificRecords, "dwm_report", options);
  }

  ngOnInit(): void { }
}
