import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { AdminService } from '../services/admin.service';

// for table to xlsx conversion
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  employees: any;
  clients: any;
  tasks: any;

  addEmployee: any = {};
  addClient: any = {};
  addTask: any = {};
  addContact: any = {};

  constructor(
    private router: Router,
    private toast: NgToastService,
    private adminService: AdminService,
  ) {

    this.adminService.getEmployees().subscribe((result) => {
      console.warn("Employees", result);
      this.employees = result;
    })

    this.adminService.getClients().subscribe((result) => {
      console.warn("Clients", result);
      this.clients = result;
    })

    this.adminService.getTasks().subscribe((result) => {
      console.warn("Tasks", result);
      this.tasks = result;
    })
  }

  show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }

  // employee functions

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

  // client functions
  add_client() {
    console.log("Client added")
    console.log(this.addClient.password)
    this.adminService.addClient(this.addClient).
      subscribe(
        res => {
          console.warn("Client added", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Client added successfully', duration: '3000' });
  }

  update_client() {
    console.log("Client details updated")

    this.toast.success({ detail: "Success", summary: 'Client updated successfully', duration: '3000' });
  }

  delete_Client(item: { clientid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteClient(item.clientid)
        .subscribe(response => {
          this.clients = this.clients.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  clients_csv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'List of clients',
      useBom: true,
      headers: ["Client_ID", "Name", "Location"],
      eol: '\n'
    };
    new ngxCsv(this.clients, "clients", options);
  }

  // task functions

  add_task() {
    console.log("Task added")
    console.log(this.addTask.password)
    this.adminService.addTask(this.addTask).
      subscribe(
        res => {
          console.warn("Task added", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Task added successfully', duration: '3000' });
  }

  update_task() {
    console.log("Task details updated")

    this.toast.success({ detail: "Success", summary: 'Task updated successfully', duration: '3000' });
  }

  delete_Task(item: { taskid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteTask(item.taskid)
        .subscribe(response => {
          this.tasks = this.tasks.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ngOnInit(): void { }

}