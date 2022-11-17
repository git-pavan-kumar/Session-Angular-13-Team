import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad{

  constructor(private authService:AuthService,
              private router:Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("inside auth guard");
    if(this.authService.isAuthenticated()) {
      console.log("auth guard, true");
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log("inside role auth guard");
    console.log("route.path --> ", route.path);
    let role = this.authService.getRole();
    if(route.path == "orders" && role == "admin") {
      console.log("auth guard, true");
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
