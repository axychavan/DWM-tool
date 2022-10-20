import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;

  empidItem = localStorage.getItem('empid');
  passwordItem = localStorage.getItem('password');
  loginData: any = {
    "empid": this.empidItem,
    "password": this.passwordItem
  }

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private userService: UserService
    ) { 

    this.userService.loginUser(this.loginData).subscribe((res) => {      
      this.user = res;
      //console.log("Login response", this.user);
    })
  }

  gotoProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route })
  }

  gotoRecords() {
    this.router.navigate(['records'], { relativeTo: this.route })
  }

  gotoEmergencyContact() {
    this.router.navigate(['emergency-contacts'], { relativeTo: this.route })
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ngOnInit(): void { }
}
