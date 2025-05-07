// <------------------------ Mapped, Look Up &  Utility Types ------------------------->

// Mapped --> Change the type of one array key to another key typeof array

type Area = {height:number; width:number};

type AreaStr = {[key in keyof Area]: string};


// Look up

type AreaString <T> ={[key in keyof T]:T[key];}
const area1:AreaString<{height:string; width:number}> = {height:"100", width:50};

// UtilityType

type Person ={name:string; age:number; email:string};
type Name = Pick<Person,"name">  //pick will take specif property from another type
type Email = Omit<Person,"name" | "age"> // Omit the properties in the new type
type PersonRequired = Required<Person> 
type PersonPartial = Partial<Person>
type MyObj = Record<string,string>