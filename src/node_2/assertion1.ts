//类型断言（Type Assertion）—— 针对“类型不匹配”
//从后端拿到一个any或unknow得数据
let data:unknown = 'hello world';

//报错:类型unknown上不存在属性“length”
//console.log(data.length);//ts(18046)

//断言:告诉TS"这个这个 unknown 百分百是个字符串！"
let len=(data as string).length;
console.log(len);//12


interface User{
    name?:string;// 文档说一定有值，但类型定义漏了
}

const user:User={
    name:"Alice"
}
// 方法一：用 ! 非空断言（下文有）
// 方法二：用 as 断言成更宽泛的类型（但这里直接断言为 string 会报错，因为 as 不能把联合类型变窄？No, as string 可以，但更推荐用 !）
// 实际上，针对可选属性，用 ! 最合适。但针对整个对象，可以这样：
const name=user.name as string; // 强行当 string 用（相当于非空断言）

//非空断言（Non-null Assertion）—— 针对 null/undefined（你之前问题的“强行通关”符）
/**
 * 操作符：!（感叹号），放在变量或属性后面。
 * 含义：告诉 TS：“我发誓，这个值此时此刻绝对不是 null 或 undefined，不用你检查！”
 */
let strs:  undefined | null |string ='6666';
// 假设这是从接口拿到的，你知道这次肯定有值
// ❌ 报错：strs 可能是 null，不能直接调用方法
strs!.length;

console.log(strs.length);

// ✅ 非空断言：强行调用，告诉 TS 不用管
console.log(strs!.length); // 输出 3

let str:  undefined | null |string;
//str.length;//没有初始化值报错：strs 可能是 null，不能直接调用方法

//as const 断言（常量断言）—— 针对“类型被放宽”
// 没有 as const
let color='red'; // TS 推断类型为：string（宽泛的字符串）

// 有 as const

let color2='red' as const; 
// TS 推断类型为："red"（精确值，不能再改）
// color2 = "blue"; //❌ 报错！因为类型是字面量 "red"

// 实战用途：定义常量对象
const ROUTES = {
    HOME: "/home",
    USER: "/user"
} as const;
// TS 自动推导出类型为 { readonly HOME: "/home"; readonly USER: "/user" }
// 而不是 { HOME: string; USER: string }，这样就能拿到具体的字符串值了。

//类型守卫中的 is（自定义断言）
// 定义一个函数，用来判断值是不是 string
function isString(value:any) : value is string{
    return typeof value === 'string';
}

let something: string | number = "hello";
if (isString(something)) {
    // 在这个块里，TS 自动知道 something 是 string
    console.log(something.length); // ✅ 安全
}