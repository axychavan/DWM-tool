import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { RecordsComponent } from './records/records.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserNavbarComponent,
    RecordsComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    UserDashboardComponent,
    UserNavbarComponent,
    RecordsComponent,
    FooterComponent
  ]
})
export class UserModule { }
