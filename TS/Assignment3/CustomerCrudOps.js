var Customer = /** @class */ (function () {
    function Customer(custName, age, phoneNumber) {
        this.custName = custName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    return Customer;
}());
var c1 = new Customer('some name 1', 10, '9443322441');
var c2 = new Customer('some name 2', 20, '9116600991');
var c3 = new Customer('some name 3', 30, '9880099934');
var custArr = [];
//Create new customers
function createNewCustomers() {
    custArr.push(c1);
    custArr.push(c2);
    custArr.push(c3);
    console.log("----------Created new customers----------");
    custArr.forEach(function (cust) { return console.log(cust); });
}
//Update a customer records
function updateCustRecords(index, custRec) {
    var c4 = new Customer("some name 4", 40, "9880099934");
    custArr.splice(index, 1, custRec);
    console.log("\n----------Updated a customer record----------");
    custArr.forEach(function (cust) { return console.log(cust); });
}
//Delete a customer record
function deleteCustRecord(index) {
    custArr.splice(index, 1);
    console.log("\n----------Deleted a customer record----------");
    custArr.forEach(function (cust) { return console.log(cust); });
}
//Find a customer record by phone number
function findCustByPhNum(phNum) {
    console.log("\n----------Find a customer record by phone number----------");
    //let arr:string[] = ['a','b','c'];
    //let f = arr.filter(s => s == 'b');
    //console.log(f);
    var foundCust = custArr.filter(function (cust) { return cust.phoneNumber === phNum; });
    foundCust.forEach(function (cust) { return console.log(cust); });
}
createNewCustomers();
updateCustRecords(2, new Customer("some name 4", 40, "9880099934"));
deleteCustRecord(1);
findCustByPhNum('9443322441');
