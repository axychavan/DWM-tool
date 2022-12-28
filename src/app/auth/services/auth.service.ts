import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = "http://localhost:3000/api/v1/login";
  signup = "http://localhost:3000/api/v1/signup"
  forgotpassword = "http://localhost:3000/api/v1/forgot-password"

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post<any>(this.login, data);
  }

  forgotPwd(data: any) {
    return this.http.post<any>(this.forgotpassword, data);
  }

  signupUser(data: any) {
    return this.http.post<any>(this.signup, data);
  }

}
