console.log("first tscode");
//String type
var nameStr = "name string";
console.log("name --> ", nameStr);
console.log("type of name --> ", typeof (nameStr));
//number type
var num = 20;
console.log("num --> ", num);
console.log("type of num --> ", typeof (num));
//any type
var anyVar = 11;
console.log("anyVar --> ", anyVar);
console.log("type of anyVar --> ", typeof (anyVar));
//Array type
var myArr = ['a', 'b', 'c'];
console.log("myArr --> ", myArr);
console.log("type of myArr --> ", typeof (myArr));
//Any Array type
var myAnyArr = ['a', 'b', '11'];
console.log("myAnyArr --> ", myAnyArr);
console.log("type of myAnyArr --> ", typeof (myAnyArr));
//Normal method
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
//Method with optional parameters
function details(id, name, email) {
    console.log("id --> ", id);
    console.log("name --> ", name);
    if (email != undefined) {
        console.log("email --> ", email);
    }
}
details(101, "Pavan", "abc@gmail.com");
details(102, "Pavan");
//Method with default params
function discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("discounted price --> ", discount);
}
discount(1000);
discount(1000, 0.30);
