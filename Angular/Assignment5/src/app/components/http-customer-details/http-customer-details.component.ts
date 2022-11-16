import { Component, OnInit } from '@angular/core';
import { CustomerHttpDetails } from 'src/app/models/customer-http-details';
import { MyService } from 'src/app/services/my.service';


@Component({
  selector: 'app-http-customer-details',
  templateUrl: './http-customer-details.component.html',
  styleUrls: ['./http-customer-details.component.css']
})
export class HttpCustomerDetailsComponent implements OnInit {

  public custArr:Array<CustomerHttpDetails> = new Array();
  public model:CustomerHttpDetails = new CustomerHttpDetails(0, '', '', '');
  public isInvalid:boolean = false;
  
  constructor(private _httpService:MyService) { }

  ngOnInit(): void {
    this._httpService.getCustomers().subscribe((customers:CustomerHttpDetails[]) => {
      this.custArr = customers;
    });
  }

  //Create new customers
  createNewHttpCustomers = () => {
    let foundCust:number = this.model.id;
    if(foundCust > 0) { //Existing customer
      let foundIndex = this.custArr.findIndex((cust)=>{return cust.id==foundCust});
      let editedCust:CustomerHttpDetails = new CustomerHttpDetails(foundCust, this.model.first_name, this.model.last_name, this.model.email);
      this._httpService.editCustomer(editedCust).subscribe((res:CustomerHttpDetails) => {
        this.custArr.splice(foundIndex, 1, res);
        this.resetFormFields();
      });
    } else { //New customer
      if(this.model.first_name == "" || this.model.last_name == "" || this.model.email == "") {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
        let custId:number = Math.floor(Math.random() * 100);
        let c1:CustomerHttpDetails = new CustomerHttpDetails(custId, this.model.first_name, this.model.last_name, this.model.email);
        this._httpService.createCustomers(c1).subscribe((customer:CustomerHttpDetails) => {
          this.custArr.push(customer);
        });
        this.resetFormFields();
      }
    }
    console.log("----------Created new customers----------");
    console.log(JSON.stringify(this.custArr));
  };

  editHttpTrigger = (custId:number) => {
    let customer = this.custArr.filter((cust) => {return cust.id == custId});
    this.model.first_name = customer[0].first_name;
    this.model.last_name = customer[0].last_name;
    this.model.email = customer[0].email;
    this.model.id = customer[0].id;
  }

  deleteHttpTrigger = (custId:number) => {
    this._httpService.deleteCustomer(custId).subscribe((res:any) => {
      let foundIndex = this.custArr.findIndex((cust)=>{return cust.id==custId});
      this.custArr.splice(foundIndex, 1);
    });
    this.resetFormFields();
  }

  resetFormFields = () => {
    this.model.first_name = "";
    this.model.last_name = "";
    this.model.email = "";
    this.model.id = 0;
  }
}
