import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { UnderReviewComponent } from './under-review/under-review.component';
import { InactiveComponent } from './inactive/inactive.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FooterComponent,
    UnderReviewComponent,
    InactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    FooterComponent
  ]
})
export class AuthModule { }
