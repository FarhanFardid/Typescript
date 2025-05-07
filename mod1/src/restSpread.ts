// <----------------- Rest and Spread Operator in TS-------------------->

// Spread operator
const mentors : string [] =['John', "kabir", "Habib"];
mentors.push('khalid');
console.log(mentors);

const teachers:string[] = [...mentors, "jonny", "sumit"];


// Rest operator
const greetFriend = (...friends:string[]) =>{
friends.forEach((friend:string) => console.log(`hello ${friend}`));
}

