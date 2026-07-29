//装饰器执行顺序
/**
 * 1.装饰器工厂从上到下依次执行,但是只是用于返回函数 但不调用函数
 * 2.装饰器函数由内到外执行,也就是执行工厂函数的返回函数,越靠近目标的装饰器,里面的函数越先执行。
 */
function setName(){
    console.log('setName1');
    return function(target:any){
        console.log('setName2');
    }
}

function setAge(){
    console.log('setAge1');
    return function(target:any){
        console.log('setAge2');
    }
}
@setName()
@setAge()
class User{
    
    name:string; // = '张三';           

    constructor(name:string){
        this.name = name;
    }
}