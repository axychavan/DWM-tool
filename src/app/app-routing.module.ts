import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordsComponent } from './records/records.component';
import { EmergencycontactComponent } from './emergency-contact/emergencycontact.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', redirectTo: 'dashboard/records', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: UserdashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'records', component: RecordsComponent },
      { path: 'emergency-contacts', component: EmergencycontactComponent }
    ]
  },
  { path: 'admindashboard', component: AdmindashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
