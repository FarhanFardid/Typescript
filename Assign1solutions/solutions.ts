function formatString(input: string, toUpper?: boolean): string{
  if(toUpper === false){
      return input.toLowerCase();
  }
  else{
      return input.toUpperCase();
  }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
return  items.filter((item:{ title: string; rating: number })=> item.rating>=4)
}


function concatenateArrays<T>(...arrays: T[][]): T[]{
let result: T[] = [];
for (const arr of arrays) {
for (const item of arr) {
  result.push(item);
}
}
return result;
} 



class Vehicle {
private make: string;
private year: number;
constructor(make: string, year: number) {
  this.make = make;
  this.year = year;
}
getInfo(): string {
  return `Make: ${this.make}, Year: ${this.year}`;
}
}

class Car extends Vehicle {
private model: string;
constructor(make: string, year: number, model: string) {
  super(make, year);
  this.model = model;
}
getModel(): string {
  return `Model: ${this.model}`;
}
}



function processValue(value: string | number): number{
if (typeof(value) === "string"){
  return value.length;
}
else{ return value * 2};
}




interface Product {
name: string;
price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null{
  if(products.length === 0){
      return null;
  }
   let expensiveProduct: Product = products[0];
   for (const product of products) {
  if (product.price > expensiveProduct.price) {
    expensiveProduct = product;
  }
}
  return expensiveProduct;
}




enum Day {
Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday
}

function getDayType(day: Day): string{
switch(day){ 
   case Day.Saturday:
    return "Weekend";
case Day.Sunday:
  return "Weekend";
default:
return "Weekday";
}
}




async function squareAsync(n: number): Promise<number> {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (n < 0) {
      reject(new Error("Error: Negative number not allowed"));
    } else {
      resolve(n * n);
    }
  }, 1000);
});
}