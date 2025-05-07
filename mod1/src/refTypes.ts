
// <------------------ Reference Types in Typescript --------------------->

const user:{firstName:string; middleName:string; lastName:string} ={
    firstName:"Farhan",
    middleName:"Fardid",
    lastName:"Al Mahmud",
}

// Optional type

const peron:{firstName:string; middleName?:string; lastName:string} ={
    firstName:"Farhan",
    lastName:"Al Mahmud",
}

// Literal Type -> when a value is also acts a type

let employee :{name:string; age:number; company:'ASG SHOP'} ={name:'fardid', age:27, company:'ASG SHOP'};

// Regular Function

function addNum(num1:number, num2:number):number{
    return num1+num2;
}

// Arrow Function

const addArrow = (num1:number, num2:number):number=>num1+num2;

// Array type

const arr: number[] = [2,4,5,6,];
const newArr:number[] = arr.map((elem:number):number=>elem*elem);