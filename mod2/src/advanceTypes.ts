// <------------------------ Type Assertions , Interface ------------------------>

// Type assertions -> when we assume better types than TS

let anything:any;
anything="My Hobby is Gardening";
 (anything as string).concat
 (anything as string).charAt     // suggests all the string methods

//  Interface

interface User {
    name:string;
    age:number;
};

const user1:User={name:"John", age:29};

// we can use interface and type alias for objects but for primitive type we can only use type alias.

type UserWithRole1  = User & {role1:string};  // type alias

interface UserWithRole2 extends User {role2:string};  // interface 

type Roll = number [];
interface RollInterface {
    [index:number] :number
}

const rollNumber:RollInterface = [1,2,3]; 

// Functions 

type Add1 = (num1:number, num2:number) => number;

interface Add2 {
    (num1:number,num2:number): number
}

const add1 :Add1=(num1,num2) =>num1+num2;
const add2:Add2=(num1,num2)=>num1+num2;

// use Type Alias for ----> Array & Functions
// use interface for -----> Objects