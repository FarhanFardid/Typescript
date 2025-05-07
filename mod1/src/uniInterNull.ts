// <--------------- Union, Intersection & Null coalescing operator ------------------>

// Union Type
type Gender ="Male" | "Female";
type Developer = "Frontend" | "Backend";

// Intersection Type

type Frontend = {skills: string[], designation1: "Frontend Dev"}
type Backend = {skills: string[], designation2: "Backend Dev"}

type FullStackDev = Frontend & Backend;

const fullStackDeveloper:FullStackDev={
    skills:['HTML', "CSS","JS"],
    designation1:"Frontend Dev",
    designation2:"Backend Dev"
};

// Nullish Coalescing -> Decision making based on null or undefined

const isAuth = null;
const result = isAuth ?? "Guest";
 
// Nullable Type
let value: string | null;

// Never Type

const throwError = (msg:string):never=>{
    throw new Error(msg);
};

