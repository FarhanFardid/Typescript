class Parent{name:string;age: number;address:string;
    constructor(name:string, age:number, address:string){
        this.name =name;
        this.age=age;
        this.address = address;
    }
    getSleep(numOfHours:number){console.log(`${this.name} will get sleep of ${numOfHours} hours`);}
}

class Student extends Parent{
    constructor(name:string, age:number, address:string){
        super(name,age,address);
    }
}

class Teacher extends Parent{profession:string
    constructor(name:string, age:number, address:string,profession:string){
        super(name,age,address);
        this.profession = profession
    }
}

const student1 = new Student("John", 23,"London");
student1.getSleep(8);

const teacher1 = new Teacher('Roy', 35,"USA","professor");
teacher1.getSleep(7); 