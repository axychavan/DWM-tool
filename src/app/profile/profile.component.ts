import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  
  empidItem = localStorage.getItem('empid');
  passwordItem = localStorage.getItem('password');
  loginData: any = {
    "empid": this.empidItem,
    "password": this.passwordItem
  }

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {

    this.authService.loginUser(this.loginData).subscribe((res) => {
      console.log("Login response", res);
      this.user = res;
    })

  }

  ngOnInit(): void {
  }

}
