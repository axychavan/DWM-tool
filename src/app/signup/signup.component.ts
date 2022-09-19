import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  createEmployee: any = {};

  constructor(
    private router: Router,
    private toast: NgToastService,
    private userService: UserService,
  ) { }

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  signup() {
    this.userService.addEmployee(this.createEmployee).
      subscribe(
        res => {
          console.log("Employee created", res);
        })
    this.router.navigate(['dashboard']);
    this.toast.success({ detail: "Signup Successful", summary: 'Account created successfully', duration: '3000' });
  }

  ngOnInit(): void {
  }

}
