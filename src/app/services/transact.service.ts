import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactService {

  url= 'http://localhost:3000/api/v1/transactinfo';

  constructor(private http:HttpClient) { }
  
  getTransact(){
    return this.http.get(this.url);
  }
}
