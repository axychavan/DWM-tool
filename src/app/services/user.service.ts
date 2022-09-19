import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  private empinfo = 'http://localhost:3000/api/v1/empinfo';
  private clientinfo = 'http://localhost:3000/api/v1/clientinfo';

  recordsUrl = 'http://localhost:3000/api/v1/transactinfo';
  contactsUrl = 'http://localhost:3000/api/v1/emergencyinfo';

  constructor(private http: HttpClient) { }

  addEmployee(employee_data: any) {
    return this.http.post<any>(this.empinfo, employee_data)
  }

  addClient(client_data: any) {
    return this.http.post<any>(this.clientinfo, client_data)
  }

  getRecords(){
    return this.http.get(this.recordsUrl);
  }

  getContacts(){
    return this.http.get(this.contactsUrl);
  }
}
