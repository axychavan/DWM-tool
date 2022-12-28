import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  greeting: any;

  constructor(private router: Router, private userService: UserService) {

    var curHr = new Date().getHours()
    if (curHr < 12) {
      this.greeting = 'Good Morning'
    } else if (curHr < 18) {
      this.greeting = 'Good Afternoon'
    } else {
      this.greeting = 'Good Evening'
    }
    
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ngOnInit(): void { }
}
