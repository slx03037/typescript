//传统型
function add(arg0:number,agr1:number):number{
    return arg0 + agr1;
}
console.log(add(1,2));

//箭头函数
/**
 * 1.变量 result 被声明为 number 类型
 * 2.但实际赋值的是一个箭头函数 (arg0:number,arg1:number):number=>{...}，这个函数的类型是 (arg0: number, arg1: number) => number
 * 3.函数类型不能直接赋值给 number 类型的变量，这就导致了类型不匹配的错误
 */
// const result1:number = (arg0:number,arg1:number):number=>{
//     return arg0 + arg1;
//     Type '(arg0: number, arg1: number) => number' is not assignable to type 'number'. ts(2322)
// }

const result = (arg0:number,arg1:number):number=>{
    return arg0 + arg1;
}

/**
 * 使用类型别名定义函数类型
 */
type AddFn = (arg0: number, arg1: number) => number;
const result2: AddFn = (arg0: number, arg1: number): number => {
    return arg0 + arg1;
}

//接口类型
interface Add{
    (arg0:number,arg1:number):number;
}

const addson:Add = (arg0: number, arg1: number): number => {
    return arg0 + arg1;
}
//1.使用别名 type
type AddType = (arg0: number, arg1: number) => number;

const addType:AddType=(arg0:number,agr1:number):number=>{
    return arg0 + agr1;
}
console.log(addType(1,2));

//函数参数
//可选参数必须要放到最后,通过?来判定
//type AddFn=(x?:number,y:number)=>number; // error 必选参数不能位于可选参数后。
type AddFnc=(x:number,y?:number)=>number; 

//默认参数
const AddFnc1=(x:number,y:number=2)=>{
    return x + y;
}; 

//剩余参数 解构
const handleDatas=(arg0: string ,...args1: number[])=>{
    console.log(arg0);
    console.log(args1);// [1,2,3,4,5]
}
handleDatas("123",1,2,3,4,5);// [ 2, 3, 4, 5 ]


//函数重载
//函数重载是指在 TypeScript 中定义一个函数时，可以为该函数提供多个不同的签名，每个签名对应不同的参数类型和返回值类型。
//1.这个是重载的一部分，指定当参数类型为string时，返回值为string类型的元素构成的数组
function handleData(x:string):string[];
//2.这个是重载的一部分，指定当参数类型为number时，返回值类型为string
function handleData(x:number):string;

function handleData(x:number|string):any{
    // 这个就是重载的内容了，他是实体函数，不算做重载的部分
    if(typeof x === "string"){
        return x.split("");
    }else{
        return x.toString().split("").map(item=>Number(item));
    }
}

handleData("123").join("_"); // [ '1', '2', '3' ]
// error 类型"string"上不存在属性"join"
//handleData(123).join("");//Property 'join' does not exist on type 'string'.ts(2339)
// error 类型"boolean"的参数不能赋给类型"number"的参数
//handleData(false);//参数类型不一致 ts(2769)