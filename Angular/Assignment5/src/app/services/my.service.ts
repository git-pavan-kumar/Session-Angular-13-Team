import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerHttpDetails } from '../models/customer-http-details';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) {}
  private BASE_URL:string = "http://localhost:7000";

  getCustomers(): Observable<any>{
    let getUsersUrl:string = this.BASE_URL + "/users/list";
    return this.httpClient.get(getUsersUrl,{headers: this.headers});
  }

  createCustomers(customer:CustomerHttpDetails): Observable<any>{
    let createUserUrl = this.BASE_URL + "/users/create";
    return this.httpClient.post(createUserUrl, customer, {headers: this.headers});
  }

  editCustomer(customer:CustomerHttpDetails): Observable<any> {
    let createUserUrl = this.BASE_URL + "/users/update/" + customer.id;
    return this.httpClient.put(createUserUrl, customer, {headers: this.headers});
  }

  deleteCustomer(customerId:number): Observable<any> {
    let createUserUrl = this.BASE_URL + "/users/delete/" + customerId;
    return this.httpClient.delete(createUserUrl);
  }
}
