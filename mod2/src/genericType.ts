// <--------------------- Generic Type --------------------->

// Generic type --- > creating type dynamically when needed & reuse it.


const rollNumbers : Array<number> =[1,2,3,4];

const mentors : Array<string> =['rahim', 'jony'];

// type GenericArray<param> = Array<param>

type GenericArray<T> = Array<T>    // T -> indicate type industry standard
 
const rollNum :GenericArray<number>=[4,5,6,7];

const users:GenericArray<{name:string; age:number}>=[
    {name:"John", age:30}
]

// Generic Tuple

type GenericTuple<x,y> = [x,y];

const pairBird: GenericTuple<string,string>=["Love bird","Java"];

const userInfo:GenericTuple<number,{name:string;email:string}>=[1236, {name:"john", email:"johnabruzzi@gmail.com"}]


//  Generic type with interface

interface Developer<T> {
name:string;
computer:string;
smartWatch: T
}

const richDeveloper: Developer<{name:string; model:string; sleepTrack:boolean}>={
    name:"Sumit",
    computer:"asus",
    smartWatch:{
        name:"apple",
        model:"aw-673",
        sleepTrack:true
    }
}
const poorDeveloper: Developer<{name:string; model:string;}>={
    name:"hablu",
    computer:"doel",
    smartWatch:{
        name:"konka",
        model:"ko-763",
    }
}