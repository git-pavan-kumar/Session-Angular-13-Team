var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(personId, greeting, refProtectedVal) {
        var _this = this;
        this.createPerson = (function () {
            return "Person created with id --> " + _this.personId + " " + _this.greeting;
        });
        this.greetingPerson = (function () { return "Hey Im ok -- from private method"; });
        this.greetingPrivileged = (function () { return _this.greetingPerson(); });
        console.log("Person is initialized");
        this.personId = personId;
        this.greeting = greeting;
        this.refProtectedVal = refProtectedVal;
        console.log("PersonId init --> ", this.personId);
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exposeProtectedMember = (function () { return _this.refProtectedVal; });
        return _this;
    }
    return Student;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exposeProtectedMember = (function () { return _this.refProtectedVal; });
        return _this;
    }
    return Staff;
}(Student));
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
var st = new Staff(11, "hello greeting", "This is refProtectedVal");
console.log(st.exposeProtectedMember());
