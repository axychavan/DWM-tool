import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtmapService {

  url= 'http://localhost:3000/api/v1/ctmapinfo';

  constructor(private http:HttpClient) { }
  getCTmap(){
    return this.http.get(this.url);
  }
}
