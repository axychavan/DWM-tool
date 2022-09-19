import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientinfoService {

  url= 'http://localhost:3000/api/v1/clientinfo';

  constructor(private http:HttpClient) { }
  getClients(){
    return this.http.get(this.url);
  }
}
