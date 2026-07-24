interface User{
    id: number;
    username:string,
    age?:number,
    avatar?:string,
    readonly createTime:string  // 只读属性 readonly
};
// 严格遵循接口结构
const u: User = {
  id: 1001,
  username: "张三",
  createTime: "2026-07-23"
};

//接口继承（extends）
interface UserSon extends User{
    sex:string
}
const u2: UserSon = {
  id: 1001,
  username: "张三",
  createTime: "2026-07-23",
  sex:"男"
};

//接口约束函数
interface LoginFn {
  (username: string, password: string): boolean;
}

const login: LoginFn = (name, pwd) => {
  return !!name && !!pwd;
};

//任意属性
interface Person  {
    name:string,
    age?:number,
    [propName:string]:any
    
}
let jack:Person = {
    name:"张三",
    age:18,
    sex:"男"
}
//一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface dog  {
    name:string,
    //age?:number,
    [propName:string]:string
    
}

let tom: dog = {
    name: 'Tom',
    gender: 'male'
};
// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.

