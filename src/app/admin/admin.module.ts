import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CtmapComponent } from './ctmap/ctmap.component';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';
import { TasksComponent } from './tasks/tasks.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminRecordsComponent } from './admin-records/admin-records.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CtmapComponent,
    EmployeesComponent,
    ClientsComponent,
    TasksComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
    AdminRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AdminDashboardComponent,
    CtmapComponent,
    EmployeesComponent,
    ClientsComponent,
    TasksComponent,
    AdminFooterComponent,
    AdminNavbarComponent
  ]
})
export class AdminModule { }
