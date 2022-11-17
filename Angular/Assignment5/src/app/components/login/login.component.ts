import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login-request';
import { LoginResponse } from 'src/app/models/login-response';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //public custArr:Array<CustomerDetails> = new Array();
  public model:LoginRequest = new LoginRequest('', '');
  public isInvalid:boolean = false;
  public isLoggedIn: boolean = false;
  private router:Router;

  constructor(private _httpService:LoginService,
              private r:Router) {
                this.router = r;
               }

  ngOnInit(): void {
  }

  //Create new customers
  login = () => {
      if(this.model.username == "" || this.model.password == "") {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
        console.log("pwd from api ", this.model.password);
        let p:string = this.model.password;
        this._httpService.login(this.model.username).subscribe((res:LoginResponse[]) => {
          console.log("pwd from api ", res);
          if(res.length > 0 && res[0].password != undefined && res[0].password == p) {
            this.isLoggedIn = false;
            this.router.navigate(['/home']);
          } else {
            this.isInvalid = true;
          }
          this.resetFormFields();
        });
        this.resetFormFields();
      }
    };

    resetFormFields = () => {
      this.model.username = "";
      this.model.password = "";
    }

}
