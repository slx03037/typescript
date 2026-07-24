//接口和类的继承 extends
class Person{
    name:string;
    constructor(name:string){   
        this.name = name;
    }

    printName():string{       
        console.log(this.name);
        return this.name;
    }
}

interface Man extends Person{
    age:number;
}

const man:Man = {
    name:"John",
    age:30,
    printName(){
        console.log(this.name);
        return this.name;
    }
}
console.log(man.printName());