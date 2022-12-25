import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupInput: any = {};
  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  constructor() {

  }

  signup() {

  }


  ngOnInit(): void { }
}
