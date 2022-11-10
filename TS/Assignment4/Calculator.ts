interface Calculator {
    process(operation:string):void;
    print(operation:string):void;
}

class MyBasicCalculator implements Calculator {
    private op1:number;
    private op2:number;
    private result:number;

    public static readonly ADD_OPERATION:string = "Add";
    public static readonly SUB_OPERATION:string = "Subtract";
    public static readonly MULTIPLY_OPERATION:string = "Multiply";
    public static readonly DIVIDE_OPERATION:string = "Divide";

    constructor(op1:number, op2:number) {
        this.op1 = op1;
        this.op2 = op2;
    }
    
    private add = ():void => {
         this.result = this.op1 + this.op2;
    }
    private subtract = ():void =>{
        this.result = this.op1 - this.op2;
    }
    private multiply = ():void =>{
        this.result = this.op1 * this.op2;
    }
    private divide = ():void =>{
        this.result = this.op1 / this.op2;
    }

    public print = ((operation:string):void  => {
        console.log("Result of the " + operation + " operation --> ", this.result);
    });

    public process = ((operation:string) => {
        if(operation === MyBasicCalculator.ADD_OPERATION) {
            this.add();
            this.print(MyBasicCalculator.ADD_OPERATION);
        } else if(operation === MyBasicCalculator.SUB_OPERATION) {
            this.subtract();
            this.print(MyBasicCalculator.SUB_OPERATION);
        } else if(operation === MyBasicCalculator.MULTIPLY_OPERATION) {
            this.multiply();
            this.print(MyBasicCalculator.MULTIPLY_OPERATION);
        } else if(operation === MyBasicCalculator.DIVIDE_OPERATION) {
            this.divide();
            this.print(MyBasicCalculator.DIVIDE_OPERATION);
        }
    });
}

class MyScientificCalculator implements Calculator {
    private op1:number;
    private result:number;

    public static readonly SQRT_OPERATION = "Square root";
    public static readonly SIN_OPERATION = "Sin";
    public static readonly COS_OPERATION = "Cos";
    public static readonly TAN_OPERATION = "Tan";

    constructor(op1:number) {
        this.op1 = op1;
    }
    
    private sqrt = ()=>{
        this.result = Math.sqrt(this.op1);
     }
     private sin = ()=>{
        this.result = Math.sin(this.op1);
    }
    private cos = ()=>{
        this.result = Math.cos(this.op1);
    }
    private tan = ()=>{
        this.result = Math.atan(this.op1 * Math.PI / 180);
    }

    public print = ((operation:string) => {
        console.log("Result of the " + operation + " operation --> ", this.result);
    });

    public process = ((operation:string) => {
        if(operation === MyScientificCalculator.SQRT_OPERATION) {
            this.sqrt();
            this.print(MyScientificCalculator.SQRT_OPERATION);
        } else if(operation === MyScientificCalculator.SIN_OPERATION) {
            this.sin();
            this.print(MyScientificCalculator.SIN_OPERATION);
        } else if(operation === MyScientificCalculator.COS_OPERATION) {
            this.cos();
            this.print(MyScientificCalculator.COS_OPERATION);
        } else if(operation === MyScientificCalculator.TAN_OPERATION) {
            this.tan();
            this.print(MyScientificCalculator.TAN_OPERATION);
        }
    });
}

class Tester {

    public testBasicCalculator = ((op1:number, op2:number) => {
        console.log("----------Basic calc operations ------------");
        //Create instance of MyBasicCalculator
        let calc:Calculator = new MyBasicCalculator(op1, op2);
        //Addition
        calc.process(MyBasicCalculator.ADD_OPERATION);
        //Subtraction  
        calc.process(MyBasicCalculator.SUB_OPERATION);
        //Multiply
        calc.process(MyBasicCalculator.MULTIPLY_OPERATION);
        //Division
        calc.process(MyBasicCalculator.DIVIDE_OPERATION);
    });

    public testScientificCalculator = ((op:number) => {
        console.log("\n----------Scientific calc operations ------------");
        //Create instance of MyScientificCalculator
        let scienCalc:Calculator = new MyScientificCalculator(op);
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

let t:Tester = new Tester();
t.testBasicCalculator(6, 3);
t.testScientificCalculator(9);