import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customer-details';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public custArr:Array<CustomerDetails> = new Array();
  public model:CustomerDetails = new CustomerDetails(0, '', '', 0, '');
  public isInvalid:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //Create new customers
  createNewCustomers = () => {
    let foundCust:number = this.model.custId;
    if(foundCust > 0) { //Existing customer
      let foundIndex = this.custArr.findIndex((cust)=>{return cust.custId==foundCust});
      let editedCust:CustomerDetails = new CustomerDetails(foundCust, this.model.custName, this.model.address, this.model.age, this.model.phoneNumber);
      this.custArr.splice(foundIndex, 1, editedCust);
    } else { //New customer
      console.log(this.model.age);
      if(this.model.custName == "" || this.model.age <= 0 ||
           this.model.address == "" || this.model.phoneNumber == "") {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
        let custId:number = Math.floor(Math.random() * 100);
        let c1:CustomerDetails = new CustomerDetails(custId, this.model.custName, this.model.address, this.model.age, this.model.phoneNumber);
        this.custArr.push(c1);
        this.resetFormFields();
      }
    }
    console.log("----------Created new customers----------");
    console.log(JSON.stringify(this.custArr));
  };

  editTrigger = (custId:number) => {
    let customer = this.custArr.filter((cust) => {return cust.custId == custId});
    this.model.custName = customer[0].custName;
    this.model.address = customer[0].address;
    this.model.age = customer[0].age;
    this.model.phoneNumber = customer[0].phoneNumber;
    this.model.custId = customer[0].custId;
  }

  deleteTrigger = (custId:number) => {
    let foundCust:number = this.model.custId;
    let foundIndex = this.custArr.findIndex((cust)=>{return cust.custId==foundCust});
    this.custArr.splice(foundIndex, 1);
    this.resetFormFields();
  }

  resetFormFields = () => {
    this.model.custName = "";
    this.model.address = "";
    this.model.age = 0;
    this.model.phoneNumber = ""; 
    this.model.custId = 0;
  }
}
