import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CustomerHttpDetails } from '../customer-http-details';

@Injectable({
  providedIn: 'root' //Accessible in entire Angular app. If only for a module, then empty this & add in providers section
})
export class MyService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) {}
  private const BASE_URL:string = "http://localhost:7000";

  getCustomers(): Observable<any>{
    let getUsersUrl:string = this.BASE_URL + "/users/list";
    return this.httpClient.get(getUsersUrl,{headers: this.headers});
  }

  createCustomers(customer:CustomerHttpDetails): Observable<any>{
    let createUserUrl = this.BASE_URL + "/users/create";
    return this.httpClient.post(createUserUrl, customer, {headers: this.headers});
  }
}
