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

//  Task 4:Define interfaces Book and Magazine. Create: A type that is a union of Book and Magazine. A type that is an intersection of Book and Magazine.

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