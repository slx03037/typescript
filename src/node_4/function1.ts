//完整函数声明注解（最直观）
//直接为参数，返回值添加类型注解
//语法:function 函数名(参数:类型):返回值类型{}

function add1(x:number,y:number):number{
    return x+y;
}

const sum :number=add1(10,20);
console.log(sum);
