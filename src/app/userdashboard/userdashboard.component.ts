import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import * as html2pdf from 'html2pdf.js'
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  records: any;
  contacts: any;
  user: any = {};

  empidItem = localStorage.getItem('empid');
  passwordItem = localStorage.getItem('password');
  loginData: any = {
    "empid": this.empidItem,
    "password": this.passwordItem
  }

  todayDate: Date = new Date();

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {

    this.authService.loginUser(this.loginData).subscribe((res) => {
      console.log("Login response", res);
      this.user = res;
    })

    this.userService.getRecords().subscribe((res) => {
      console.log("Records", res);
      this.records = res;
    })

    this.userService.getContacts().subscribe((res) => {
      console.log("Emergency Contacts", res);
      this.contacts = res;
    })
  }

  download_pdf() {
    var element = document.getElementById('records');
    var opt = {
      margin: 1,
      filename: 'dwm_report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
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
      headers: ["ID", "Date", "Emp_ID", "Client_ID", "Task_ID", "Duration", "Description"],
      eol: '\n'
    };
    new ngxCsv(this.records, "dwm_report", options);
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ngOnInit(): void { }

}
