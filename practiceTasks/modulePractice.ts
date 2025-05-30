// Task 1: Objective: Write a TypeScript program that outputs a welcome message.

const message:string ="Hello World, I will complete this course successfully and become a Next level Web Developer!";

console.log(message);

// Task 2: Objective: Create a function with parameters and an optional literal type.

 function person (name:string,age:number, role?:'admin' | 'user' | 'guest'){
    if(role)
    {
console.log(`The ${name} is ${age} years old and is working as ${role}`);
    }
    else{
console.log(`The ${name} is ${age} years old.`);
    }
    
 }
 person('john', 45);