//TS 内置常用工具泛型
//1.Partial<T>  将某个类型里的属性全部变为可选项
type User={name:string,age:number}

type PartialUser=Partial<User>

const user:PartialUser={
    name:'zhangsan'
}

//2.Readonly<T> 将某个类型里的属性全部变为只读
type ReadonlyUser=Readonly<User>

const readonlyUser:ReadonlyUser={
    name:'zhangsan',
    age:18
}
// readonlyUser.age=20;//error Cannot assign to 'age' because it is a read-only property

//3.Required<T> 将某个类型里的属性全部变为必选项
type RequiredUser=Required<User>

const requiredUser:RequiredUser={
    name:'zhangsan',
    age:18
}
requiredUser.age=20;//ok


//4.Record<K,T> 将K中的每个属性值转化为T类型
type RecordUser=Record<'id'|'name',string>

const recordUser:RecordUser={
    id:'1',
    name:'zhangsan'
}

//Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型
type Record<K extends keyof any, T> = {
    [P in K]: T;
}

interface PageInfo {
    title:string
}

type Page='home'| "about" | "contact";
const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

//5.Pick<T,K> 从T中取出K中的属性
type PickUser=Pick<User,'name'>

const pickUser:PickUser={
    name:'zhangsan'
}

//6.Omit<T,K> 从T中取出除去K中的属性
type OmitUser=Omit<User,'age'>

const omitUser:OmitUser={
    name:'zhangsan'
}

//7.Exclude<T,U> 从T中取出不在U中的属性
type ExcludeUser=Exclude<'a'|'b'|'c','a'>

//const excludeUser:ExcludeUser='b' |'c'; //The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
const excludeUser0:ExcludeUser='b';
const excludeUser1:ExcludeUser='c';


//8.Extract<T,U> 从T中取出在U中的属性
type ExtractUser=Extract<'a'|'b'|'c','a'|'b'>

//const extractUser:ExtractUser='a'|'b'; //'extractUser' is declared but its value is never read.
const extractUser0:ExtractUser='a'; 
const extractUser1:ExtractUser='b'; 