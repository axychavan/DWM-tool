import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { CtmapComponent } from './ctmap/ctmap.component';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';
import { TasksComponent } from './tasks/tasks.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminSidenavComponent,
    CtmapComponent,
    EmployeesComponent,
    ClientsComponent,
    TasksComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AdminDashboardComponent,
    AdminSidenavComponent,
    CtmapComponent,
    EmployeesComponent,
    ClientsComponent,
    TasksComponent
  ]
})
export class AdminModule { }
