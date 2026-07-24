//类继承接口 implements
interface Man{
    name:string,
    age:number,
    eat():void
}

class Stu implements Man{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    eat():number{
        console.log("吃饭");
         return this.age;
    }
     drink():string{
        console.log("喝水");
        return this.name;
    }

    login() {
        return true;
    }
}
const stu=new Stu("张三",18);
console.log(stu.name,stu.age);
console.log(stu.eat());
console.log(stu.drink());
console.log(stu.login());
