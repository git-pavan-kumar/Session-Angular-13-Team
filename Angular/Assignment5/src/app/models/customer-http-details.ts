export class CustomerHttpDetails {
    id:number;
    first_name:string;
    last_name:string;
    email:string;

    constructor(custId:number, firstName:string, lastName:string, email:string) {
        this.id = custId;
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
    }
}
