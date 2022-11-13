import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordsComponent } from './records/records.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserNavbarComponent,
    ProfileComponent,
    RecordsComponent,
    EmergencyContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    UserDashboardComponent,
    UserNavbarComponent,
    ProfileComponent,
    RecordsComponent,
    EmergencyContactComponent,
    FooterComponent
  ]
})
export class UserModule { }
