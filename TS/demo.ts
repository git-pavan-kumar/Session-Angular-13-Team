console.log("first tscode");

//String type
let nameStr:string = "name string";
console.log("name --> ", nameStr);
console.log("type of name --> ", typeof(nameStr));

//number type
let num:number = 20;
console.log("num --> ", num);
console.log("type of num --> ", typeof(num));
 
//any type
let anyVar:any = 11;
console.log("anyVar --> ", anyVar);
console.log("type of anyVar --> ", typeof(anyVar));

//Array type
let myArr:Array<string> = ['a', 'b', 'c'];
console.log("myArr --> ", myArr);
console.log("type of myArr --> ", typeof(myArr));

//Any Array type
let myAnyArr:Array<any> = ['a', 'b', '11'];
console.log("myAnyArr --> ", myAnyArr);
console.log("type of myAnyArr --> ", typeof(myAnyArr));

//Normal method
function add(num1:number, num2:number):number {
    return num1 + num2;
}
console.log(add(1,2));

//Method with optional parameters
function details(id:number, name:string, email?:string) {
    console.log("id --> ", id);
    console.log("name --> ", name);
    if(email != undefined) {
        console.log("email --> ", email);
    }
}
details(101, "Pavan", "abc@gmail.com");
details(102, "Pavan");

//Method with default params
function discount(price:number, rate:number = 0.50) {
    let discount = price * rate;
    console.log("discounted price --> ", discount);
}
discount(1000);
discount(1000, 0.30);

