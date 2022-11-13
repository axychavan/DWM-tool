import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  putUser: any = {};

  empidItem = localStorage.getItem('empid');
  passwordItem = localStorage.getItem('password');
  loginData: any = {
    "empid": this.empidItem,
    "password": this.passwordItem
  }

  constructor(
    private userService: UserService,
    private toast: NgToastService
  ) {
    this.userService.loginUser(this.loginData).subscribe((res) => {
      this.user = res;
      console.log("Login response", this.user);
    })
  }

  updateUser() {
    this.putUser.role = 'employee';
    this.putUser.emergency = 'no';

    this.userService.putUser(this.empidItem, this.putUser).
      subscribe(
        res => {
          console.warn("patch request (user)", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: "User Profile updated.", duration: 4000 });
  }

  ngOnInit(): void {
  }

}
