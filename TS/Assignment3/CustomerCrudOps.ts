class Customer {
    custName:string;
    age:number;
    phoneNumber:string;

    constructor(custName:string, age:number, phoneNumber:string) {
        this.custName = custName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
}

let c1:Customer = new Customer('some name 1', 10, '9443322441');
let c2:Customer = new Customer('some name 2', 20, '9116600991');
let c3:Customer = new Customer('some name 3', 30, '9880099934');

let custArr:Array<Customer> = [];

//Create new customers
function createNewCustomers() {
    custArr.push(c1);
    custArr.push(c2);
    custArr.push(c3);
    console.log("----------Created new customers----------");
    custArr.forEach(cust => console.log(cust));
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

createNewCustomers();
updateCustRecords(2, new Customer("some name 4", 40, "9880099934"));
deleteCustRecord(1);
findCustByPhNum('9443322441');
