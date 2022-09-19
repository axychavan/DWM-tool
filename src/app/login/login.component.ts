import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: boolean = false;

  loginData: any = {};

  empidItem: any;
  passwordItem: any;
  roleItem: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toast: NgToastService,
    private authService: AuthService
  ) { }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    console.log("User Input", this.loginData.empid, this.loginData.password)

    this.authService.loginUser(this.loginData).subscribe((res) => {
      console.log("Login response", res);

      let empidkey = res.map((item) => item.empid);
      localStorage.setItem("empid", empidkey);

      let passwordkey = res.map((item) => item.password);
      localStorage.setItem("password", passwordkey);

      let rolekey = res.map((item) => item.role);
      localStorage.setItem("role", rolekey);

      this.empidItem = localStorage.getItem('empid');
      this.passwordItem = localStorage.getItem('password');
      this.roleItem = localStorage.getItem('role');

      //console.log("role", this.roleItem);

      if (this.roleItem == "employee") {
        this.router.navigate(['dashboard']);
        this.toast.success({ detail: "Login Successful", summary: 'Welcome back !', duration: '3000' });
      } else if (this.roleItem == "admin") {
        this.router.navigate(['admindashboard']);
        this.toast.success({ detail: "Login Successful", summary: 'Logged as an Admin', duration: '3000' });
      } else {
        this.toast.error({ detail: "Login Failed", summary: 'Please enter correct credentials', duration: '3000' });
        this.loginData.empid = '';
        this.loginData.password = '';
      }
    })
  }

  ngOnInit(): void { }
}