// <--------------------- Type Alias in Typescript ------------------>

// Object type Alias
type Student ={
    name:string;
    age:number;
    class:number;
    contact:string;
};

const student1:Student={name:"John", age:10, class:5, contact:"01986566"};

// Function type alias

type Add = (num1:number, num2:number) => number;

const addNumber:Add = (num1, num2) =>num1+num2;