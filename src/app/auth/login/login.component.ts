import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  loginData: any = {};

  empidItem: any;
  passwordItem: any;
  roleItem: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) { }

  login() {
    console.log("User Input", this.loginData.empid, this.loginData.password)

    this.authService.loginUser(this.loginData).subscribe((res) => {
      console.log("Login response", res);

      let empidkey = res.profile[0].empid;
      localStorage.setItem("empid", empidkey);

      let passwordkey = res.profile[0].password;
      localStorage.setItem("password", passwordkey);

      let rolekey = res.profile[0].role;
      localStorage.setItem("role", rolekey);

      this.empidItem = localStorage.getItem('empid');
      this.passwordItem = localStorage.getItem('password');
      this.roleItem = localStorage.getItem('role');

      if (this.roleItem == "employee") {
        this.router.navigate(['dashboard']);
        this.toast.success({ detail: "Login Successful", summary: 'Welcome back !', duration: '3000' });
      } else if (this.roleItem == "admin") {
        this.router.navigate(['admin-dashboard']);
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
