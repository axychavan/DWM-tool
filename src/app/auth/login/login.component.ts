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

  loginInput: any = {};
  forgotPasswordInput: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) { }

  login() {
    console.log("User Input", this.loginInput.empid, this.loginInput.password)

    this.authService.loginUser(this.loginInput).subscribe((res) => {
      console.log("Login response", res);

      var rolekey = res.role;
      var reviewedkey = res.reviewed;
      var statuskey = res.status;

      if (rolekey == "employee" && reviewedkey == "yes" && statuskey == "active") {
        this.router.navigate(['dashboard']);
        this.toast.success({ detail: "Login Successful", summary: 'Welcome !!!', duration: '3000' });
      } else if (reviewedkey == "no") {
        this.router.navigate(['under-review']);
        this.toast.warning({ detail: "Awaiting Review", summary: 'Administrator is reviewing your account.', duration: '3000' });
      } else if (statuskey == "inactive") {
        this.router.navigate(['inactive']);
        this.toast.error({ detail: "Account Inactive", summary: 'Your account is inactive.', duration: '3000' });
      } else if (rolekey == "admin") {
        this.router.navigate(['admin-dashboard']);
        this.toast.success({ detail: "Login Successful", summary: 'Logged as an Admin', duration: '3000' });
      } else {
        this.toast.error({ detail: "Login Failed", summary: 'Please enter correct credentials', duration: '3000' });
        this.loginInput.empid = "";
        this.loginInput.password = "";
      }
    })
  }

  forgotPassword() {
    this.authService.forgotPwd(this.forgotPasswordInput).subscribe((res) => {
      console.log("forgot-password response", res);

      if (res.message == "Valid credentials. Email sent") {
        this.toast.success({ detail: "Email Sent", summary: 'Credentials sent on your email', duration: '3000' });
      } else {
        this.toast.error({ detail: "Invalid Email/Phone", summary: 'Please enter correct credentials', duration: '3000' });
      }
    })
  }

  ngOnInit(): void { }
}
