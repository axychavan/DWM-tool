import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { RecordsComponent } from './user/records/records.component';
import { EmergencyContactComponent } from './user/emergency-contact/emergency-contact.component';
import { ProfileComponent } from './user/profile/profile.component';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { CtmapComponent } from './admin/ctmap/ctmap.component';
import { AdminRecordsComponent } from './admin/admin-records/admin-records.component';
import { UnderReviewComponent } from './auth/under-review/under-review.component';

const routes: Routes = [

  // Auth Module
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'under-review', component: UnderReviewComponent },
  { path: 'signup', component: SignupComponent },

  // User Module
  { path: 'dashboard', redirectTo: 'dashboard/records', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'records', component: RecordsComponent },
      { path: 'emergency-contacts', component: EmergencyContactComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },

  // Admin Module
  { path: 'admin-dashboard', redirectTo: 'admin-dashboard/employees', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'records', component: AdminRecordsComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'ctmap', component: CtmapComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
