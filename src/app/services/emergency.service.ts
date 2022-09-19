import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  url= 'http://localhost:3000/api/v1/emergencyinfo';

  constructor(private http:HttpClient) { }
  
  getEmergencyContacts(){
    return this.http.get(this.url);
  }
}
