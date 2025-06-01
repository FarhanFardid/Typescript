// Task 1: Objective: Write a TypeScript program that outputs a welcome message.

const message: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer!";

console.log('/n Task1 output');
console.log('Task1',message);

// Task 2: Objective: Create a function with parameters and an optional literal type.

function person(name: string, age: number, role?: "admin" | "user" | "guest") {
  if (role) {
    console.log(`The ${name} is ${age} years old and is working as ${role}`);
  } else {
    console.log(`The ${name} is ${age} years old.`);
  }
}
console.log('/n Task2 output');
person("john", 45);

//  Task 3: Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

type Person = {
  Name: string;
  Address: string;
  Hair_color: string;
  Eye_color: string;
  Income: number;
  Expense: number;
  Hobbies: string[];
  Family_Members: string[];
  Job:string;
  Skills: string[];
  Marital_Status:string;
  Friends: string[];
};

const user :Person ={Name:"Jack Dawson", Address:"221/B, Baker Street, London", Hair_color:"Brown",Eye_color:"Gray",Income:50000,Expense:30000,Hobbies:['pets','gardening','traveling'], Family_Members:['parents','siblings','wife','children'], Job:'Software Engineer',Skills:['Web Application','Mobile App','Desktop App'],Marital_Status:"Married",Friends:['Jonny','John']};

console.log('Task3 output');
console.log(user);

//  Task 4: Define interfaces Book and Magazine. Create: A type that is a union of Book and Magazine. A type that is an intersection of Book and Magazine.

interface Book {
    bookTitle:string;
    unit_sold:number;
    writer:string;
};

interface Magazine{
    mgzTitle: string;
    publisher:string;
}

type unionBookMgz = Book | Magazine;
type interBookMgz = Book & Magazine;

const bookItem:unionBookMgz ={
bookTitle:"Rich and Poor",
unit_sold: 87,
writer:"Ronald Lawn"
};
const mgzItem:unionBookMgz ={
    mgzTitle: "Times",
    publisher: "Times Now"
};

const comboItem:interBookMgz ={
    bookTitle:"zero to hero",
    unit_sold:99,
    writer:"C.Nolan",
    mgzTitle:"Todays Time",
    publisher:"NY Time",
};
console.log("Task 4 output");
console.log(bookItem);
console.log(mgzItem);
console.log(comboItem);

//  Task 5: Write a function that reverses a string.

function reverseString (inputStr: string):string{
  const reverseStr = inputStr.split('').reverse().join('');
  return reverseStr;
}
console.log("Task 5 output");
console.log(reverseString('hello'));

// Task 6:  Write a function that uses the rest operator for variable-length arguments. Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

function sumOfArray(...inputArr: number[]):number{
return inputArr.reduce((total,val)=> total+val, 0);
}
console.log("Task 6 output");
console.log(sumOfArray(5, 6, 7, 8));

// Task 7: Create a function that accepts a parameter of type string | number. The function should: Return the length if the input is a string. Return the square if the input is a number.

function typeAssertion(params:string | number):number{
 if(typeof params ==="string")
 {
  return params.length;
 }
 else  {
   return params * params;
 }
}

console.log("Task 7 output");
console.log(typeAssertion('hello Typescript'));

// Task 8: Create a type AdminUser that is an intersection of: User with properties name and email. Admin with property adminLevel. Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

type User={name: string; email:string};
type Admin ={adminLevel:string};

type AdminUser = User & Admin;
function describeAdmin(user:AdminUser):string{
  return(`${user.name} is an Admin with ${user.adminLevel} role and email is ${user.email}`);
};

console.log('Task 8 output');
const user1 ={name:"John", email:"john@gmail.com", adminLevel:"Super Admin"}
console.log(describeAdmin(user1));

// Task 9: Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.

type Address = {
  flat?: string;
  road?: string;
  city?: string;
};

type Employee = {
  name: string;
  email: string;
  address?: Address;
};
const employeeInfo:Employee ={
  name:"Sherlock Holmes",
  email:"sh@detective.com",
  address:{
    flat:"221-B",
    road:"Baker Street",
    city:"London",
  }
}
function getEmployeeCity(employee:Employee):string | undefined{
  return employee?.address?.city;
}

console.log("task 9 output");
console.log(getEmployeeCity(employeeInfo));

// Task 10: Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.

function getDisplayName(name: string | null | undefined):string{
  return name?? "Anonymous";
}

console.log("Task 10 output");
console.log(getDisplayName(undefined));

// Task 11: Write a function processData(data: unknown) that: Checks if data is a string and returns the uppercased version. If data is a number, returns the square of it.


function processData(data:unknown):string | number{
  if(typeof data === "string"){
    return data.toUpperCase();
  }
  else if (typeof data === "number"){
    return data*data;
  }
  else return 'Unsupported data type';
}

console.log("Task 11 output");
console.log(processData('Eid Mubarak'));


// Task 13: Create a generic function that: Accepts an array of any type. Returns a new array with duplicate values removed.

const createGenericArray =<T> (param:T[]): T[]=>{
let uniqueArr: T[] =[];
param.map((elem) =>{
  if(!uniqueArr.includes(elem)){
    uniqueArr.push(elem);
  }
})
  return uniqueArr;
}

console.log("task 13 output");
console.log(createGenericArray([3,4,6,7,8,7,8,9]));

// Task 14: Write an asynchronous function that: Simulates fetching user data (containing name and age).Returns the data after a short delay.

const fetchUserData = async():Promise<{name:string, age:number}>=>{
  return new Promise((resolve)=> {
  setTimeout(()=>{
resolve({name:'John', age:24});
}, 1000);
});
};

fetchUserData().then(data => 
{console.log("Task 14 output");
  console.log(data)});

// Task 15: Write a function isString(value: unknown): value is string that checks if a value is a string. Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.

function isString(value:unknown):value is string{
return typeof value === "string"
}

function printUpperCase (value:unknown): void{
  if(isString(value)){
  console.log((value as string).toUpperCase());
  }
else {
  console.log("Not a string");
}
}

console.log("Task 15 output");
printUpperCase(6);

// Task 16: Create a function that: Takes an object and a key. Returns the property value from the object based on the provided key. Use keyof to constrain the key to valid properties of the object.

function getValidProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log("Task 16 output");
console.log(getValidProperty({name:"John", age:26, email:"john@gmail.com"}, 'name'));
console.log(getValidProperty({name:"John", age:26, email:"john@gmail.com"}, 'email'));


// Task 12: Write a function handleError that: Accepts a message: string. Throws an error with the given message. Use the never return type to indicate that this function never returns.

function handleError(message:string):never {
  console.log(message);
  throw new Error(message);
}

console.log("Task 12 output");
console.log(handleError("An error occurred"));