import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../customer';
import { MyService } from '../shared/my.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public custArr:Array<Customer> = new Array();

  public model:Customer = new Customer('', 0, '');

  public getData:any[] = new Array();

  constructor(private _httpService:MyService) { }

  ngOnInit(): void {
  }

  //Create new customers
  createNewCustomers() {
    let c1:Customer = new Customer(this.model.custName, this.model.age, this.model.phoneNumber);
    this.custArr.push(c1);
    console.log("----------Created new customers----------");
    console.log(JSON.stringify(this.custArr));
  };

  getUserDetails(){
    this._httpService.getUsers().subscribe((res : any[])=>{
             console.log(res);
       this.getData = res;
     });
  }
}
