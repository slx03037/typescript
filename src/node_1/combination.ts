//Array 数组类型
//写法1 简写语法
const list: string[]=["苹果","香蕉"];
const numList: number[] = [1, 2, 3];

//写法2 
// Array 构造函数；
const boolList:Array<boolean>=new Array<boolean>();
//泛型语法（适配复杂类型、嵌套场景）
const boolList2:Array<boolean> = [true,false];

//Tuple 元组类型
//写法1 固定2位：第一位字符串、第二位数字
const user:[string,number]=["张三",1];
//const user1:[string,number]=["张三"];//写法错误会报错，固定两位;
//const user1:[string,number]=["张三","李四"];//写法错误会报错，类型不一致;
//onst user1:[string,number]=[1,"张三"];//写法错误会报错，固定位置类型统一不能修改;

//写法2 可选元素元组
const info:[string,number?]=["张三"];

//只读元组(禁止修改)
const pos:readonly [number,number] = [1,2];

// useState 返回的就是元组
// [number, Dispatch<<SetStateAction<number>>]
//const[count, setCount]=useState(0);

// 函数返回多个值
function getUser():[string,number]{
return["Alice",25];
}

// CSV 行解析
const row:[string,string,number,boolean]=["Alice","Engineer",25,true];

// ❌ 长度不匹配
//const bad:[string,number]=["Alice"];// 缺少元素
//const bad2:[string,number]=["Alice",25,1];// 元素过多

// ⚠️ push 不会检查类型安全（设计限制）
const t:[string,number]=["Alice",25];
t.push("extra");// 不报错，但破坏元组约束

//Object 对象类型
//写法1
const goods:{
    //必填属性
    id:number;
    name:string;
    title:string;
    //可选属性(可传可不传)
    desc?: string;
     // 只读属性（初始化后不可修改）
    readonly createTime: string;
}={
    id:1,
    name:"苹果",
    title:"苹果手机",
    desc:"苹果手机",
    createTime:"2022-01-01"
}

//写法2
let lowerCaseObject: object;
lowerCaseObject = {};
// lowerCaseObject = 1; // ts(2322)
// lowerCaseObject = 'a'; // ts(2322)
// lowerCaseObject = true; // ts(2322)
// lowerCaseObject = null; // ts(2322)
// lowerCaseObject = undefined; // ts(2322)

let upperCaseObject: Object;
upperCaseObject = 1; // ok
upperCaseObject = 'a'; // ok
upperCaseObject = true; // ok
// upperCaseObject = null; // ts(2322)
// upperCaseObject = undefined; // ts(2322)
upperCaseObject = {}; // ok

let ObjectLiteral: {};

type isLowerCaseObjectExtendsUpperCaseObject = object extends Object ? true: false; // true
type isUpperCaseObjectExtendsLowerCaseObject = Object extends object ? true: false; // true
upperCaseObject= lowerCaseObject;
lowerCaseObject=upperCaseObject;
ObjectLiteral=upperCaseObject;

let ObjectLiterals:{};
ObjectLiterals=1;
ObjectLiterals='a';
ObjectLiteral=true;
//ObjectLiterals=null; // ts(2322)
//ObjectLiterals=undefined;// ts(2322)
ObjectLiterals={};


const person: object ={ name:"Alice", age:25};

// ❌ 错误：不能访问具体属性
//console.log(person.name);// Property 'name' does not exist on type 'object'

// ✅ 只能访问 Object 原型上的方法
console.log(person.toString());

//1. 对象字面量类型（推荐）
const human:{name:string;age:number}={
    name:"Alice",
    age:25
}

// 2. interface
interface Person {
  name:string;
  age:number;
}

const p:Person={name:"Alice",age:25};

// 3. Record
const map:Record<string,number>={
    a:1,
    b:2
};

//4.索引签名
const dict:{ [key:string]:number|string}={};
dict["name"]="Alice";
dict["age"]=25;
console.log(dict);

// object 不接受原始类型
//const x: object ="hello";// ❌ 错误

// Object 接受原始类型（自动装箱）
const y: Object ="hello";// ✅ 可以



//enum 枚举类型
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH;
console.log(dir); 

enum Status{
    Pending='pending',
    Success='success',
    Error='error'
}
let status: Status = Status.Success
console.log(status); 

