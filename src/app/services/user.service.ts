import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  login = "http://localhost:3000/api/v1/employee/login";
  employee = "http://localhost:3000/api/v1/employee";
  client = "http://localhost:3000/api/v1/client";
  task = "http://localhost:3000/api/v1/task";
  ctmap = "http://localhost:3000/api/v1/ctmap";
  record = "http://localhost:3000/api/v1/records";
  emergency = "http://localhost:3000/api/v1/employee/emergency";

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post<any>(this.login, data);
  }

  getEmployees() {
    return this.http.get<any>(this.employee);
  }

  getClients() {
    return this.http.get<any>(this.client);
  }

  getTasks() {
    return this.http.get<any>(this.task);
  }

  getCtmap() {
    return this.http.get<any>(this.ctmap);
  }

  //records
  getRecords() {
    return this.http.get<any>(this.record);
  }

  addRecord(data: any) {
    return this.http.post<any>(this.record, data);
  }

  deleteRecord(id: string) {
    return this.http.delete(this.record + '/' + id);
  }

  getEmergency() {
    return this.http.get<any>(this.emergency);
  }

  state() {
    return [
      {
        id: 1,
        name: "Maharashtra"
      },
      {
        id: 2,
        name: "Gujarat"
      }
    ]
  }

  city() {
    return [
      {
        id: 1,
        name: "Pune"
      },
      {
        id: 1,
        name: "Mumbai"
      },
      {
        id: 2,
        name: "Surat"
      }
    ]
  }




}
