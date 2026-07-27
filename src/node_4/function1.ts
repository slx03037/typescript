//完整函数声明注解（最直观）
//直接为参数，返回值添加类型注解
//语法:function 函数名(参数:类型):返回值类型{}

function add1(x:number,y:number):number{
    return x+y;
}

const sum :number=add1(10,20);
console.log(sum);

//函数表达式类型别名（复用首选）
//通过 type / interface 定义函数整体类型，适合统一函数规范、回调函数复用。
//定义函数类型：接收两个number，返回number
type ClacFn=(a:number,b:number)=>number;
//约束变量必须符合该函数结构
const sum2: ClacFn=(a,b)=>a + b;
const minus: ClacFn=(a,b)=>a-b;

