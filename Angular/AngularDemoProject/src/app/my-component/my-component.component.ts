import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public custArr:Array<Customer> = new Array();

  public model:Customer = new Customer('', 0, '');

  constructor() { }

  ngOnInit(): void {
  }

  //Create new customers
  createNewCustomers() {
    let c1:Customer = new Customer(this.model.custName, this.model.age, this.model.phoneNumber);
    this.custArr.push(c1);
    console.log("----------Created new customers----------");
    console.log(JSON.stringify(this.custArr));
  };
}
