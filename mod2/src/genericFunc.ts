// <------------------- Generic Functions ----------------->

// Functions with Generic

const createArray = (params:string):string[] => {
return [params];
}

const createArrayWithGeneric = <T> (params:T):T[]=>{
    return [params];
}

const resGeneric = createArrayWithGeneric<string>('Bangladesh');


//  Tuple with Generic

const createArrayWithTuple = <T,S> (param1:T,param2:S):[T,S] =>{
    return [param1,param2]
}

const resTuple = createArrayWithTuple<string,number>("Ban", 1971);


// Constraints --> it enforce to must send some specific values with the type with exact properties.

const addCourseStudent = <T extends {id:number; name:string;email:string}>(student:T)=>{
    const course:string ="Next Level";
    return {...student,course}
}

