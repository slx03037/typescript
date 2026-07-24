//基础语法
class person{
    //属性声明
    name:string;
    age:number;

    //构造函数
    constructor(name:string,age:number){
        this.name = name;
        this.age = age; 
    }
}

//访问修饰符
class Animal{
    //public 公共，默认值
    public name:string;
    //private 私有
    private age:number;
    //protected 受保护的
    protected sex:string;

    constructor(name:string,age:number,sex:string){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    private getAge(){
        return this.age;
    }
}

class Dog extends Animal{
    constructor(name:string,age:number,sex:string){
        super(name,age,sex);
    }
    bark()  {
        console.log(this.name + '汪汪汪');//public
        //console.log(this.age);//报错，私有属性不能被访问    
        console.log(this.sex);//protected
    }
}

//参数属性 简写
class Cat{
    constructor(public name:string,public age:number,public sex:string){}
    miao(){
        console.log(this.name + '喵喵喵');
    }
}

//reaonly 只读属性
class Person{
    readonly name:string;
    readonly age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    update(age:number){
        //this.age = age;//报错，只读属性不能被修改
    }
}

//存取器   
class User{
    private _name:string;

    constructor(name:string){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value:string){
        this._name = value;
    }
}

//静态属性和方法
class MathUtils{
    static PI:number = 3.14;
    static add(a:number,b:number){
        return a + b;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(1,2));

//抽象类
abstract class Fruit{
    abstract name:string;
    abstract eat():void;
    getType():string{
        return `type: ${this.name}}`;
    }
}

//const fruit=new Fruit();//报错，抽象类不能被实例化

class Apple extends Fruit{
    name:string;

    constructor(name:string){
       super();
       this.name = name;
    }
    eat(){
        console.log('eat apple');
    }
}

const apple = new Apple('apple');