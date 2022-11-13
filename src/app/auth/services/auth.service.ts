import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = "http://localhost:3000/api/v1/employee/login";

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post<any>(this.login, data);
  }

}
