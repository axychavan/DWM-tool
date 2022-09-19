import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpinfoService {

  private url = 'http://localhost:3000/api/v1/empinfo';

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get(this.url);
  }
  
  deleteEmployee(id: string){
    return this.http.delete(this.url+'/'+id);
  }
  
}
