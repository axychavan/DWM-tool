import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  employee = "http://localhost:3000/api/v1/employee";
  records = "http://localhost:3000/api/v1/records/customdate";
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

  // Records
  postRecords(data: any) {
    return this.http.post<any>(this.records, data);
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

  associateCtmap(data: any) {
    return this.http.post<any>(this.ctmap, data);
  }

  deleteCtmap(id: string) {
    return this.http.delete(this.ctmap + '/' + id);
  }
}
