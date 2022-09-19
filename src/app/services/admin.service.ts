import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private empinfo = 'http://localhost:3000/api/v1/empinfo';
  private clientinfo = 'http://localhost:3000/api/v1/clientinfo';
  private taskinfo = 'http://localhost:3000/api/v1/tasksinfo';
  private emergencyinfo = 'http://localhost:3000/api/v1/emergencyinfo';

  constructor(private http: HttpClient) { }

  addEmployee(employee_data: any) {
    return this.http.post<any>(this.empinfo, employee_data)
  }

  deleteEmployee(id: string){
    return this.http.delete(this.empinfo+'/'+id);
  }

  addClient(client_data: any) {
    return this.http.post<any>(this.clientinfo, client_data)
  }

  deleteClient(id: string){
    return this.http.delete(this.clientinfo+'/'+id);
  }

  addTask(task_data: any) {
    return this.http.post<any>(this.taskinfo, task_data)
  }

  deleteTask(id: string){
    return this.http.delete(this.taskinfo+'/'+id);
  }

  addContact(contact_data: any) {
    return this.http.post<any>(this.emergencyinfo, contact_data)
  }

  deleteContact(id: string){
    return this.http.delete(this.emergencyinfo+'/'+id);
  }
}
