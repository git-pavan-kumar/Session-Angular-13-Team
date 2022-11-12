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

    //Create new customers
    createNewCustomers(custArr:CustomerDetails[]) {
        let custId:number = Math.floor(Math.random() * 100);
        let c1:CustomerDetails = new CustomerDetails(custId, this.model.custName, this.model.address, this.model.age, this.model.phoneNumber);
      
    }


    //Update a customer records
    function updateCustRecords(index:number, custRec:Customer) {
        let c4:Customer = new Customer("some name 4", 40, "9880099934");
        custArr.splice(index,1,custRec);
        console.log("\n----------Updated a customer record----------");
        custArr.forEach(cust => console.log(cust));
    }


    //Delete a customer record
    function deleteCustRecord(index:number) {
        custArr.splice(index, 1);
        console.log("\n----------Deleted a customer record----------");
        custArr.forEach(cust => console.log(cust));
    }


    //Find a customer record by phone number
    function findCustByPhNum(phNum:string) {
        console.log("\n----------Find a customer record by phone number----------");
        //let arr:string[] = ['a','b','c'];
        //let f = arr.filter(s => s == 'b');
        //console.log(f);
        let foundCust = custArr.filter((cust) => {return cust.phoneNumber === phNum});
        foundCust.forEach(cust => console.log(cust));
    }
}
