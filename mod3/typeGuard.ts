// Type Guarding

type NormalUser={
    name:string;
};

type AdminUser = {
    name:string;
    role:string;
};

const getUser = (user: NormalUser | AdminUser) =>{
    if('role' in user){
        console.log(`${user.name} is an ${user.role}`);
    }
    else{console.log(`User name is ${user.name}`);}
}

getUser({name:"John"});
getUser({name:"John", role:"admin"});

// Type Narrowing

class Animals{name:string; species:string
    constructor(name:string, species:string){
        this.name=name;
        this.species=species;
    }
}

class Cat extends Animals{
    constructor(name:string, species:string){
        super(name,species);
    }
    makeMewau(){
        console.log("Mewau Mewau");
    }
}

class Dog extends Animals{
    constructor(name:string, species:string){
        super(name,species);
    }
    makeBark(){
        console.log("Gheuw Gheuw");
    }
}

const isDog=(animal:Animals):animal is Dog=>{
    return animal instanceof Dog
}
const isCat=(animal:Animals):animal is Cat=>{
    return animal instanceof Cat
}

const getAnimal = (animal:Animals)=>{
    if(isDog(animal)){
        animal.makeBark();
    }
    else if(isCat(animal)){
        animal.makeMewau();
    }
    else(
        console.log("Animal is not in the described type")
    )
}
const cat = new Cat("Tom","cat");
const dog = new Dog("Bagha","dog");
getAnimal(cat);