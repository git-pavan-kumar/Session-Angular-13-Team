export class CustomerDetails {
    custId:number;
    custName:string;
    address:string;
    age:number;
    phoneNumber:string;

    constructor(custId:number, custName:string, address:string, age:number, phoneNumber:string) {
        this.custId = custId;
        this.custName = custName;
        this.address = address;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
}
