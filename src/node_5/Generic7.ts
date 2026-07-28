//泛型:泛型是指在定义函数、接口、类等时，使用占位符（或称类型参数）来表示实际的类型，而不是具体指定具体的类型。
//语法:泛型用的是尖括号 < T,U,V > 来表示，其中 T、U、V 等是占位符，用于表示不同的类型。这些符号必须写在函数名或接口名后面，参数列表前面。

const getArray = <T>(arg:T,time:number=5):T[]=>{return []};

const array = <T>(arg:T,time:number=5):T[]=>{
    let arr:T[]=[];
    for(let i=0;i<time;i++){
        arr.push(arg);
    }
    return arr;
};
console.log(getArray<string>("hello",3));
console.log(array<string>("hello",3));

//泛型变量
/**
 * 当我们使用泛型的时候,你在处理这个数据的时候就必须把这个数据当作任意类型来处理.
 * 这就意味着不是所有类型做的操作都不能做,不是所有类型都能调用的方法不能调用
 */
// const getLength =<T>(arg:T):number=>{
//     Property 'length' does not exist on type 'T'.ts(2339)
//     return arg.length;
// }

const getLength =<T extends string>(arg:T):number=>{
    return arg.length;
}

//接口类型类定义泛型
interface Arr{
    <T>(arg:T,times?:number):T[];
}

const arr1:Arr=<T>(arg:T,time:number=5):T[]=>{
   return new Array(time).fill(arg);
}
console.log(arr1("hello world",1));

const arr2:Arr=<T>(arg:T,time=5):T[]=>{
   return new Array(time).fill(arg);
}

console.log(arr2("hello world"));

//2
interface Person<T>{
    age:T,
    name:string
}
const person:Person<number>={
    age:18,
    name:"张三"
}
console.log(person.age);
console.log(person.name);

//泛型约束(继承)extends
interface A{
    name:string
}
const getLengths =<T extends A>(arg:T):number=>{
    return arg.name.length;
}
getLengths({name:"hello world",key:"key"});
//泛型约束(类)implements
class Person1<T extends number>{
    constructor(public age:T){} 
}