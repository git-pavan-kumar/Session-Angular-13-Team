import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated:boolean = false;
  private role:string  | undefined;

  constructor() { }

  isAuthenticated() {
    return this.authenticated;
  }

  setAuth(authenticated:boolean) {
    this.authenticated = authenticated;
  }

  getRole() {
    return this.role;
  }

  setRole(role:string) {
    this.role = role;
  }
}
