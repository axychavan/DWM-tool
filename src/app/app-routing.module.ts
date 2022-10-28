import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordsComponent } from './records/records.component';
import { EmergencycontactComponent } from './emergency-contact/emergencycontact.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { CtmapComponent } from './admin/ctmap/ctmap.component';

const routes: Routes = [

  // Auth Module
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // User Module
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

  // Admin Module
  { path: 'admin-dashboard', redirectTo: 'admin-dashboard/employees', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
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
