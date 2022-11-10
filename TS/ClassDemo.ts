class Person {

    public personId:number;
    private greeting:string;
    protected refProtectedVal:string;//Can be accessed in any class within same file, not in other external files
    readonly readOnlyVar:number;
 
    constructor(personId:number, greeting:string, refProtectedVal:string) {
        console.log("Person is initialized");
        this.personId = personId;
        this.greeting = greeting;
        this.refProtectedVal = refProtectedVal;
        this.readOnlyVar = 100;
        console.log("PersonId init --> ", this.personId);
    }

    public createPerson = (() => {
        //this.readOnlyVar = 200; //Compiler error
        return "Person created with id --> " + this.personId + " " + this.greeting;
    });
    private greetingPerson = (() => {  return "Hey Im ok -- from private method";});
    public greetingPrivileged = (() => { return this.greetingPerson(); });
}

class Student extends Person {
    public exposeProtectedMember = (() => { return this.refProtectedVal});
}

class Staff extends Student {
    public exposeProtectedMember = (() => { return this.refProtectedVal});
}

//Ops on Parent class
/*
let p:Person = new Person(11, "hello greeting", "This is refProtectedVal");
console.log(p.createPerson());
console.log(p.greetingPrivileged());
*/

//Ops on Child class
/*
let s:Student = new Student(11, "hello greeting", "This is refProtectedVal");
console.log(s.createPerson());
console.log(s.greetingPrivileged());
console.log(s.exposeProtectedMember());
*/

let st:Staff = new Staff(11, "hello greeting", "This is refProtectedVal");
console.log(st.exposeProtectedMember());