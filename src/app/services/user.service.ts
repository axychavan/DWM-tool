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
  empidTransactUrl = "http://localhost:3000/api/v1/transactinfo/empid";
  clientUrl = "http://localhost:3000/api/v1/clientinfo";
  taskUrl = "http://localhost:3000/api/v1/tasksinfo";

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

  getRecords() {
    return this.http.get(this.transactUrl);
  }

  getempidRecords() {
    return this.http.get(this.empidTransactUrl);
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
}
