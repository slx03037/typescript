// 原始类型

//string类型
let str: string = 'Hello World';
console.log(str);


let name: string = "Alice";
// 模板字符串也属于此类型
let greeting: string = `Hello, ${name}`; 
console.log(greeting);

let email: String="alice@example.com";
let txt: String=`alice email is ${email}`;
console.log(txt);


// number 类型 所有数字（整数、浮点数、正负无穷、NaN）都用它
//整数
let age:number=30;
console.log(age);
console.log(age+10);
//浮点数
let price:number=99.99;
console.log(price);
console.log(price+1);
//十六进制也支持
let hex:number=0xf00d;
console.log(hex);

const n1:number=NaN;
console.log(n1);

const n2:number=Infinity;
console.log(n2);

//boolean类型
const isLogin:boolean=true;
console.log(isLogin);

const isLoading:boolean=false;
console.log(isLoading);

let isAdult:boolean= age>=20;
console.log(isAdult);
isAdult=age<=20;
console.log(isAdult);

//null和undefined类型
// 严格模式下，null 只能赋值 null
const empty: null = null;

let strs: string | null = "666";
console.log(strs);
strs=null;
console.log(strs);


//undefined 未定义类型
let u:undefined=undefined;
console.log(u);

let strss: string | undefined = "666";
console.log(strss);
strss=undefined;
console.log(strss);

//bigint 大整数类型
const bigNum: bigint = 99999999999999999999n;
console.log(bigNum);
const smNum: bigint = 1n;
console.log(smNum);

let sum:bigint=bigNum+smNum;
console.log(sum);

//let ss=smNum+1;//报错


//symbol 唯一标识类型
const key1: symbol = Symbol("key");
const key2: symbol = Symbol("key");
console.log(key1 === key2); // false 永远不相等

let keys= Symbol("key");
console.log(keys);
keys=Symbol("keys");
console.log(keys);

//联合类型(多基本类型混用)
// ID 既可以是数字也可以是字符串
type Id = string | number;
const userId: Id = 1001;
console.log(userId);
const orderId: Id = "ORD202607";
console.log(orderId);

//字面量类型（固定基础类型值）
type Status = "success" | "fail" | "loading";
const resStatus: Status = "success";
console.log(resStatus);