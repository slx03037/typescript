//in 用来遍历枚举类型
type keys= 'a' | 'b' | 'c'; //联合类型
type Obj={
    [p in keys]:any
} // -> { a: any, b: any, c: any }

const obj:Obj={
    a:1,
    b:2,
    c:3
}
//in 用来遍历类类型
class A{
    a:string
    b:number
    c:boolean
    constructor(a:string,b:number,c:boolean){
        this.a=a
        this.b=b
        this.c=c
    }
}
type A1={
    [p in keyof A]:A[p]
}// -> { a: string, b: number, c: boolean }
const a:A1={
    a:'1',
    b:2,
    c:true
}
//keyof 用来遍历对象类型
type Obj1={
    a:string,
    b:number,
    c:boolean
}
type Oj2={
    [p in keyof Obj1]:Obj1[p]
}// -> { a: string, b: number, c: boolean }
const obj2:Oj2={
    a:'1',
    b:2,
    c:true
}