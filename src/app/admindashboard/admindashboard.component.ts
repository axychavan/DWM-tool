import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
import { ClientinfoService } from '../services/clientinfo.service';
import { EmergencyService } from '../services/emergency.service';
import { EmpinfoService } from '../services/empinfo.service';
import { TasksService } from '../services/tasks.service';

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
  emergency: any;

  addEmployee: any = {};
  addClient: any = {};
  addTask: any = {};
  addContact: any = {};

  constructor(
    private userService: UserService,
    private empinfoService: EmpinfoService,
    private clientinfoService: ClientinfoService,
    private tasksService: TasksService,
    private emergencyService: EmergencyService,
    private router: Router,
    private toast: NgToastService,
    private adminService: AdminService,
  ) {

    this.empinfoService.getEmployees().subscribe((result) => {
      console.warn("Employees", result);
      this.employees = result;
    })

    this.clientinfoService.getClients().subscribe((result) => {
      console.warn("Clients", result);
      this.clients = result;
    })

    this.tasksService.getTasks().subscribe((result) => {
      console.warn("Tasks", result);
      this.tasks = result;
    })

    this.emergencyService.getEmergencyContacts().subscribe((result) => {
      console.warn("Emergency Contacts", result);
      this.emergency = result;
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
    this.userService.addEmployee(this.addEmployee).
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
      this.empinfoService.deleteEmployee(item.empid)
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
      headers: ["Employee_ID", "Name", "Email", "Phone", "Designation", "Date of Joining", "Password", "Role"],
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

  // contact functions

  add_contact() {
    console.log("Contact added")
    console.log(this.addContact.password)
    this.adminService.addContact(this.addContact).
      subscribe(
        res => {
          console.warn("Contact added", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Contact added successfully', duration: '3000' });
  }

  update_contact() {
    console.log("Contact details updated")

    this.toast.success({ detail: "Success", summary: 'Contact updated successfully', duration: '3000' });
  }

  delete_Contact(item: { emid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteContact(item.emid)
        .subscribe(response => {
          this.emergency = this.emergency.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  contacts_csv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'List of emergency contacts',
      useBom: true,
      headers: ["ID", "Name", "Phone"],
      eol: '\n'
    };
    new ngxCsv(this.emergency, "emergency_contacts", options);
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ngOnInit(): void { }

}