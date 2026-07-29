function setProp(target:string){
    console.log(target)
    return function(target:any){
        console.log(target)
    }
}
// 这里面的target 就是Person这个类
@setProp("Person")
class Test{
    public name:string = 'test'
}

const test = new Test()
test.name;


//类的装饰器
declare type ClassDecorator = <T extends Function>(target: T) => T | void;
//target: T - 被装饰的类

function Greeter(target:Function):void{
    target.prototype.greet = function():void{
        console.log('hello world')
    }
}
@Greeter
class Geeting{
    greet(){}
}
let geeting = new Geeting()
geeting.greet();

function Greeter2(greeting:string){
    return function(target:Function){
        target.prototype.greet=function():void{
            console.log(greeting)
        }
    }
}

@Greeter2("hello worlds")
class Geetings{
    constructor(){}
}
const g=new Geetings;



