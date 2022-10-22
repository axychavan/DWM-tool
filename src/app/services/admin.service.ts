import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  employee = "http://localhost:3000/api/v1/employee";
  client = "http://localhost:3000/api/v1/client";
  task = "http://localhost:3000/api/v1/task";
  ctmap = "http://localhost:3000/api/v1/ctmap";

  constructor(private http: HttpClient) { }

  //Employee
  getEmployees() {
    return this.http.get<any>(this.employee);
  }

  addEmployee(data: any) {
    return this.http.post<any>(this.employee, data);
  }

  updateEmployee() {

  }

  deleteEmployee(id: string) {
    return this.http.delete(this.employee + '/' + id);
  }

  //Client
  getClients() {
    return this.http.get<any>(this.client);
  }

  addClient(data: any) {
    return this.http.post<any>(this.client, data);
  }

  updateClient() {

  }

  deleteClient(id: string) {
    return this.http.delete(this.client + '/' + id);
  }

  //Task
  getTasks() {
    return this.http.get<any>(this.task);
  }

  addTask(data: any) {
    return this.http.post<any>(this.task, data);
  }

  updateTask() {

  }

  deleteTask(id: string) {
    return this.http.delete(this.task + '/' + id);
  }

  getCtmap() {
    return this.http.get<any>(this.ctmap);
  }

}
