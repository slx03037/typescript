//关键字infer
type ReturnType<T> =T extends(...args:any[]) => infer R?R:any;


//索引类型
const person={
    name:'张三',
    age:18
}

function getValues(person:any,keys:string[]){
    return keys.map(key=>person[key])
}

console.log(getValues(person,['name','age']))
console.log(getValues(person,['gender']))

function getValues2<T extends object,K extends keyof T>(person:T,keys:K[]){
    return keys.map
}

console.log(getValues2(person,['name','age']))

//索引类型
const person0={
    name:'张三',
    age:18
}

function getValues3(person:any,keys:string[]){
    return keys.map(key=>person[key])
}

console.log(getValues(person, ['name', 'age'])) // ['musion', 35]
console.log(getValues(person, ['gender'])) // [undefined]


function getValues4<T, K extends keyof T>(person: T, keys: K[]): T[K][] {
  return keys.map(key => person[key]);
}

interface Person {
    name: string;
    age: number;
}

const person3: Person = {
    name: 'musion',
    age: 35
}
getValues4(person, ['name']) // ['musion']
//getValues4(person, ['gender']) // 报错：Argument of Type '"gender"[]' is not assignable to parameter of type '("name" | "age")[]'. Type "gender" is not assignable to type "name" | "age".

function getProperty<T extends object,K extends keyof T>(obj:T,key:K){
    return obj[key]
}


//映射类型
interface TestInterface{
    name:string,
    age:number
}
// 我们可以通过+/-来指定添加还是删除
type OptionalTestInterface<T> = {
  [p in keyof T]+?:T[p]
}
type newTestInterface = OptionalTestInterface<TestInterface>
// type newTestInterface = {
//    name?:string,
//    age?:number
// }

type OptionalTestInterface1<T> = {
 +readonly [p in keyof T]+?:T[p]
}

type newTestInterface0 = OptionalTestInterface1<TestInterface>
// type newTestInterface = {
//   readonly name?:string,
//   readonly age?:number
// }
interface Window {
    title: string;
    size: { width: number; height: number };
}
//DeepPartial
type DeepPartial<T> ={
    //如果 object，则递归类型
    [U in keyof T]?:T[U] extends object?  DeepPartial<T[U]>:T[U];
}
type PartialedWindow = DeepPartial<Window>; // 现在T上所有属性都变成了可选啦
 