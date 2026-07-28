//keyof
//keyof 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
interface Person{
    name:string;
    age:number;
}

type K1=keyof Person; //type K1 = "name" | "age"
const k1:K1="name";
console.log(k1) //name age

type K2=keyof Person[]  //type k2 = "length" | number
const k2:K2=0;
console.log(k2) //length 0

type K3=keyof {} //type k3 = never
//const k3:K3="name";//Type '"name"' is not assignable to type 'never'.ts(2322)


type K4=keyof {a:number,b:string} //type k4 = "a" | "b"
const k4:K4="a";
console.log(k4) //a b

type K5=keyof { [x:string]:any} //type k5 = string | number
const k5:K5=0;
console.log(k5) //string number
const k55="name";
console.log(k55) //string number

type K6=keyof {[x:string]:Person}   //type k6 = string
const k6:K6="name";
console.log(k6) //name


type PersonKey = keyof Person; //type PersonKey = "name" | "age"



function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

const sem2:Person={
    name:"semlinker",
    age:30
}

//在 TypeScript 中支持两种索引签名，数字索引和字符串索引：
interface StringArray {
    //字符串索引->keyof StringArray=> string|number
    [index:string] :string;
}

interface StringArray1 {
    //数字索引->keyof StringArray1=>number
    [index:number]:string;
}


//keyof 的作用
function prop(obj: object, key: string) {
  //元素隐式地拥有 any 类型，因为 string 类型不能被用于索引 {} 类型
  //return obj[key]; //lement implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
  return (obj as any)[key]
}

/**
 * 首先定义了 T 类型并使用 extends 关键字约束该类型必须是 object 类型的子类型，
 * 然后使用 keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，
 * 最后利用 extends 关键字约束 K 类型必须为 keyof T 联合类型的子类型。
 */
function prop1<T extends object,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

type Todo={
    id:number;
    text:string;
    done:boolean;
}

const todo:Todo={
    id:1,
    text:"learn TS",
    done:true
}

function Prop<T extends object,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

const id=Prop(todo,"id"); //number
console.log(id) //1
const text=Prop(todo,"text"); //string
console.log(text)   //"learn TS"
const done=Prop(todo,"done"); //boolean
console.log(done)  //true


/**
 * prop<T extends object, K extends keyof T>(obj: T, key: K) 函数，
 * 已经可以正确地推导出指定键对应的类型。那么当访问 todo 对象上不存在的属性时
 */
//const date = Prop(todo, "date"); //Argument of type '"date"' is not assignable to parameter of type 'keyof Todo'.
