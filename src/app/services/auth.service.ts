import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = "http://localhost:3000/api/v1/login";

  constructor(private http: HttpClient) { }

  loginUser(login_data: any) {
    return this.http.post<any>(this.loginUrl, login_data)
  }
}
