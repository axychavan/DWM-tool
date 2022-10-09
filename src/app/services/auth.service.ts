import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = "http://localhost:3000/api/v1/auth/login";

  constructor(private http: HttpClient) { }

  loginUser(login_data: any) {
    return this.http.post<any>(this.login, login_data)
  }
}
