import { Component, OnInit } from '@angular/core';
import { CustomerHttpDetails } from '../customer-http-details';
import { MyService } from '../shared/my.service';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {

  public custArr:Array<CustomerHttpDetails> = new Array();

  public model:CustomerHttpDetails = new CustomerHttpDetails('', '', '');

  public getData:any[] = new Array();

  constructor(private _httpService:MyService) { }

  ngOnInit(): void {
  }

  //Create new customers
  createNewCustomers() {
    
    let c1:CustomerHttpDetails = new CustomerHttpDetails(this.model.firstName, this.model.lastName, this.model.email);
    this.custArr.push(c1);
    this._httpService.createCustomers(c1).subscribe((res:any[]) => {

    })
  };

  getUserDetails(){
    this._httpService.getCustomers().subscribe((res : any[])=>{
             console.log(res);
       this.getData = res;
     });
  }

}
