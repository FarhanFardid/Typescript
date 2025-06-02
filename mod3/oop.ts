// Classical approach for class craetion
class Animal {name:string; species:string; sound:string

    constructor(name:string, species:string, sound:string){
        this.name =name;
        this.species=species;
        this.sound=sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);}
} 

const cats = new Animal('Tom','cat','meaw');
cats.makeSound();

// parameter properties for class creation

class Animal2 {
    constructor(public name:string,public species:string, public sound:string){}
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);}
} 
const dogs = new Animal('Bagha','dog','gheu');
dogs.makeSound();