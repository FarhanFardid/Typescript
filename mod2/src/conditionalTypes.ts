// <-------------------------- Conditional Types -------------------------- >

// Conditional type

type a1 = null;
type b1 = undefined;

type x = a1 extends null? true : false;
type y = a1 extends null ? true : b1 extends undefined? undefined : any;



// conditional  keyof Constraints

type Rich ={bike:string; car:string; ship:string}

type CheckVehicle<T> = T extends keyof Rich? true : false;
type hasBike = CheckVehicle<"bike">


