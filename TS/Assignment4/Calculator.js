var MyBasicCalculator = /** @class */ (function () {
    function MyBasicCalculator(op1, op2) {
        var _this = this;
        this.add = function () {
            _this.result = _this.op1 + _this.op2;
        };
        this.subtract = function () {
            _this.result = _this.op1 - _this.op2;
        };
        this.multiply = function () {
            _this.result = _this.op1 * _this.op2;
        };
        this.divide = function () {
            _this.result = _this.op1 / _this.op2;
        };
        this.print = (function (operation) {
            console.log("Result of the " + operation + " operation --> ", _this.result);
        });
        this.process = (function (operation) {
            if (operation === MyBasicCalculator.ADD_OPERATION) {
                _this.add();
                _this.print(MyBasicCalculator.ADD_OPERATION);
            }
            else if (operation === MyBasicCalculator.SUB_OPERATION) {
                _this.subtract();
                _this.print(MyBasicCalculator.SUB_OPERATION);
            }
            else if (operation === MyBasicCalculator.MULTIPLY_OPERATION) {
                _this.multiply();
                _this.print(MyBasicCalculator.MULTIPLY_OPERATION);
            }
            else if (operation === MyBasicCalculator.DIVIDE_OPERATION) {
                _this.divide();
                _this.print(MyBasicCalculator.DIVIDE_OPERATION);
            }
        });
        this.op1 = op1;
        this.op2 = op2;
    }
    MyBasicCalculator.ADD_OPERATION = "Add";
    MyBasicCalculator.SUB_OPERATION = "Subtract";
    MyBasicCalculator.MULTIPLY_OPERATION = "Multiply";
    MyBasicCalculator.DIVIDE_OPERATION = "Divide";
    return MyBasicCalculator;
}());
var MyScientificCalculator = /** @class */ (function () {
    function MyScientificCalculator(op1) {
        var _this = this;
        this.sqrt = function () {
            _this.result = Math.sqrt(_this.op1);
        };
        this.sin = function () {
            _this.result = Math.sin(_this.op1);
        };
        this.cos = function () {
            _this.result = Math.cos(_this.op1);
        };
        this.tan = function () {
            _this.result = Math.atan(_this.op1 * Math.PI / 180);
        };
        this.print = (function (operation) {
            console.log("Result of the " + operation + " operation --> ", _this.result);
        });
        this.process = (function (operation) {
            if (operation === MyScientificCalculator.SQRT_OPERATION) {
                _this.sqrt();
                _this.print(MyScientificCalculator.SQRT_OPERATION);
            }
            else if (operation === MyScientificCalculator.SIN_OPERATION) {
                _this.sin();
                _this.print(MyScientificCalculator.SIN_OPERATION);
            }
            else if (operation === MyScientificCalculator.COS_OPERATION) {
                _this.cos();
                _this.print(MyScientificCalculator.COS_OPERATION);
            }
            else if (operation === MyScientificCalculator.TAN_OPERATION) {
                _this.tan();
                _this.print(MyScientificCalculator.TAN_OPERATION);
            }
        });
        this.op1 = op1;
    }
    MyScientificCalculator.SQRT_OPERATION = "Square root";
    MyScientificCalculator.SIN_OPERATION = "Sin";
    MyScientificCalculator.COS_OPERATION = "Cos";
    MyScientificCalculator.TAN_OPERATION = "Tan";
    return MyScientificCalculator;
}());
var Tester = /** @class */ (function () {
    function Tester() {
        this.testBasicCalculator = (function (op1, op2) {
            console.log("----------Basic calc operations ------------");
            //Create instance of MyBasicCalculator
            var calc = new MyBasicCalculator(op1, op2);
            //Addition
            calc.process(MyBasicCalculator.ADD_OPERATION);
            //Subtraction  
            calc.process(MyBasicCalculator.SUB_OPERATION);
            //Multiply
            calc.process(MyBasicCalculator.MULTIPLY_OPERATION);
            //Division
            calc.process(MyBasicCalculator.DIVIDE_OPERATION);
        });
        this.testScientificCalculator = (function (op) {
            console.log("\n----------Scientific calc operations ------------");
            //Create instance of MyScientificCalculator
            var scienCalc = new MyScientificCalculator(op);
            //sqrt
            scienCalc.process(MyScientificCalculator.SQRT_OPERATION);
            //sin
            scienCalc.process(MyScientificCalculator.SIN_OPERATION);
            //cos
            scienCalc.process(MyScientificCalculator.COS_OPERATION);
            //tan
            scienCalc.process(MyScientificCalculator.TAN_OPERATION);
        });
    }
    return Tester;
}());
var t = new Tester();
t.testBasicCalculator(6, 3);
t.testScientificCalculator(9);
