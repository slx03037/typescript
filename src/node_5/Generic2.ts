//T：泛型占位符（代表任意类型）
function getValue<T>(value:T):T{
    return value;
}

//使用时自动推导/手动传类型
const str=getValue("hello");// 推导为 string 类型
const num=getValue(123);// 推导为 number 类型

//泛型和any的区别 any 是放弃类型校验，泛型是通用且保留类型校验。


//多泛型参数
//支持同时定义多个泛型，适配多类型参数场景。
//接收两个不同的类型，返回元组
function swap<T,U>(a:T,b:U):[U,T]{
    return [b,a];
}

const res = swap("张三", 18); 
// 推导类型：[string, number]
console.log(res)



//泛型约束（extends)：默认泛型 T 代表任意类型，自由度太高，可通过 extends 限制泛型范围，约束泛型必须满足指定结构/类型。
// 基础类型约束
//约束T 必须时string|number
function getLen<T extends string|number>(val:T):number{
    return val.toString.length;//报错，T可能不是string|number
}

getLen("123"); // 3
getLen(1234); // 4
//getLen(true); // 报错，布尔值不满足约束

//对象结构约束
//约束泛型必须包含指定属性，解决泛型无法读取未知属性的问题
//约束:必须包含Length属性
interface LengthObj{
    length:number;
}
function getLenth<T extends LengthObj>(val:T):number{
    return val.length;
}
getLenth("123");
getLenth([1,2,3]);
getLenth({ length: 10 });

//泛型默认类型
//给泛型设置默认值，未手动传类型时，自动使用默认类型。
//默认T为string类型
function printVal<T=string>(val:T):void{
    console.log(val);
}
printVal("hello world"); // 默认 string
printVal<number>(123); // 手动指定 number
printVal(1123); // 默认 string


//泛型在各类语法中的实战用法
//泛型函数（工具封装首选）
//封装通用工具函数，一套代码适配所有类型。
//通用数组去重
function uniqueArr<T>(arr:T[]):T[]{
    return [...new Set(arr)]
}

uniqueArr([1,2,2,3]); // number[]
uniqueArr(["a","b","a"]); // string[]
//泛型接口（约束通用对象结构）
//后端通用返回体、通用列表结构必用。
//后端统一返回格式
interface ApiRes<T>{
    code:number;
    msg:string;
    data:T;
}

//用户返回数据
type User={
    id:number;
    name:string;
}
//判断数据返回
type Goods={
    id:number;
    name:string;
    price:number;
}

//复用同一个接口，适配不同data类型
const Users:ApiRes<User> = {
    code: 200,
    msg: "success",
    data: {
        id: 1,
        name: "张三"
    }
}

const Goods:ApiRes<Goods> = {
    code: 200,
    msg: "success",
    data: {
        id: 1,
        name: "苹果",
        price: 10
    }
}

//泛型类（通用实体类封装）
//适合封装通用缓存、通用仓库、通用请求类。
class Cache<T>{
    private data:T[]=[];

    add(item:T){
        this.data.push(item);
    }
    getList():T[]{
        return this.data;
    }
}

//数字缓存
const numCache=new Cache<number>();
numCache.add(1);
//字符串缓存
const strCache=new Cache<string>();
strCache.add("hello");

//泛型别名（type 通用类型复用）

type ListData<T>={
    list:T[];
    total: number;
    page: number;
}

// 用户分页数据
type UserPage = ListData<{name: string}>;