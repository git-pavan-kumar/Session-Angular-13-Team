import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //Accessible in entire Angular app. If only for a module, then empty this & add in providers section
})
export class MyService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<any>{
    let getUsersUrl:string = "http://localhost:7000/users/list";
    return this.httpClient.get(getUsersUrl,{headers: this.headers});
  }
}
