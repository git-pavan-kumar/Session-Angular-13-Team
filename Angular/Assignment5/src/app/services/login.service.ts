import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  private BASE_URL:string = "http://localhost:7001";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');

  login(uname:string): Observable<any> {
    let loginUrl:string = this.BASE_URL + "/login";
    return this.httpClient.get(loginUrl,{headers: this.headers, params: new HttpParams().set("username", uname)});
  }

}
