class Shape {
    getArea():number{
return 0;
    }
}

class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super();
        this.radius=radius;
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    height:number;
    width:number;
    constructor(height:number, width:number){
        super();
        this.height=height;
        this.width=width;
    }
    getArea(): number {
        return this.height*this.width;
    }
}

const getShapeArea = (param:Shape)=>{
    console.log(param.getArea());
}

const shape1 = new Shape();
const circle = new Circle(10);
const rect = new Rectangle(4, 8);
 
getShapeArea(shape1);
getShapeArea(circle);
getShapeArea(rect);
