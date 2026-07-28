//const identity = (arg) => arg; //arameter 'arg' implicitly has an 'any' type.ts(7006)

type idBoolean = (arg: boolean) => boolean;
type idNumber = (arg: number) => number;
type idString = (arg: string) => string;

/**
 * 其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。
 * 但实际上 T 可以用任何有效名称代替。除了 T 之外，以下是常见泛型变量代表的意思：
 * 
 * K（Key）：表示对象中的键类型；
 * V（Value）：表示对象中的值类型；
 * E（Element）：表示元素类型。
 */
const identity2 = <T>(arg: T): T => arg;

function identity<T>(value:T):T{return value}

function identity3<T,K,E>(value0:T,value1:K,value3:E):E{return value3}

//泛型约束
interface Lengthwise {
    size:number;
}

function trace<T extends Lengthwise>(arg: T): T {
    console.log(arg.size);
    return arg;
}

//泛型工具类型
//typeof
interface Person{
    name:string;
    age:number;
}

const sem:Person={
    name:"semlinker",
    age:30
}
type sem1 = Person;
type Sem = typeof sem; //type sem1 = Person; 

const lolo: Sem = { name: "lolo", age: 5 }

const Message={
    name:"hello",
    age:30,
    address:{
        city:"shanghai",
        street:"zhongshan"  
    }
}

type message=typeof Message;

//类型为
// type message1 = {
//     name: string;
//     age: number;
//     address: {
//         province: string;
//         city: string;
//     };
// }

//typeof 操作符除了可以获取对象的结构类型之外，它也可以用来获取函数对象的类型
function toArray(x:number):Array<Number>{return [x]}
type Func =typeof toArray; //type Func = (x: number) => number[]
const arr=toArray(1);
console.log(arr) //[1];

