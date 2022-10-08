import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private empinfo = 'http://localhost:3000/api/v1/empinfo';
  private clientinfo = 'http://localhost:3000/api/v1/clientinfo';

  contactsUrl = 'http://localhost:3000/api/v1/emergencyinfo';
  transactUrl = 'http://localhost:3000/api/v1/transactinfo';
  employeeRecordsUrl = "http://localhost:3000/api/v1/employee/records";
  clientUrl = "http://localhost:3000/api/v1/clientinfo";
  taskUrl = "http://localhost:3000/api/v1/tasksinfo";

  ctmapUrl = "http://localhost:3000/api/v1/ctmapinfo";

  //keep
  emergency_contacts = "http://localhost:3000/api/v1/employee/emergency_contacts";

  constructor(private http: HttpClient) { }

  addEmployee(employee_data: any) {
    return this.http.post<any>(this.empinfo, employee_data)
  }

  getClients() {
    return this.http.get(this.clientUrl);
  }

  getTasks() {
    return this.http.get(this.taskUrl);
  }

  addClient(client_data: any) {
    return this.http.post<any>(this.clientinfo, client_data)
  }

  getemployeeRecords() {
    return this.http.get(this.transactUrl);
  }

  deleteRecord(id: string) {
    return this.http.delete(this.transactUrl + '/' + id);
  }

  getContacts() {
    return this.http.get(this.contactsUrl);
  }

  postTransact(addRecord: any) {
    return this.http.post<any>(this.transactUrl, addRecord);
  }

  getctmap() {
    return this.http.get<any>(this.ctmapUrl);
  }

  //keep
  getEmergency_contacts() {
    return this.http.get<any>(this.emergency_contacts);
  }
}
