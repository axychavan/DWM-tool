import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private toast: NgToastService,
    private router: Router
  ) { }

  signup() {
    console.log("User Input", this.signupInput.name, this.signupInput.email, this.signupInput.phone, this.signupInput.password)

    this.authService.signupUser(this.signupInput).subscribe((res) => {
      console.log("Signup response", res);

      if (res.message == "Account is created") {
        this.toast.success({ detail: "Account Created", summary: 'Your account is being reviewed', duration: '3000' });
        this.router.navigate(['under-review']);
      } else {
        this.toast.warning({ detail: "Account Exists", summary: 'Your account is being reviewed', duration: '3000' });
        this.router.navigate(['under-review']);
      }
    })
  }

  ngOnInit(): void { }
}
