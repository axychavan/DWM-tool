import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from 'src/app/services/admin.service';

import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any;
  addEmployee: any = {};

  constructor(
    private toast: NgToastService,
    private adminService: AdminService
  ) {

    this.adminService.getEmployees().subscribe((res) => {
      this.employees = res;
      console.log("Employees", this.employees);
    })

  }

  add_employee() {
    console.log("Employee added")
    console.log(this.addEmployee.password)
    this.adminService.addEmployee(this.addEmployee).
      subscribe(
        res => {
          console.warn("Employee added", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Employee added successfully', duration: '3000' });
  }

  update_employee() {
    console.log("Employee details updated")
    this.toast.success({ detail: "Success", summary: 'Employee updated successfully', duration: '3000' });
  }

  delete_Employee(item: { empid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteEmployee(item.empid)
        .subscribe(response => {
          this.employees = this.employees.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  employees_csv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'List of employees',
      useBom: true,
      headers: ["Employee_ID", "Name", "Email", "Phone", "Designation", "Date of Joining", "Password", "Role", "Emergency Contact"],
      eol: '\n'
    };
    new ngxCsv(this.employees, "employees", options);
  }

  ngOnInit(): void { }
}
