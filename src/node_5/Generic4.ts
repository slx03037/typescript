//ReturnType
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R ? R: any;
//infer在这里用于提取函数类型的返回值类型。ReturnType<T> 只是将 infer R 从参数位置移动到返回值位置，因此此时 R 即是表示待推断的返回值类型。

type Func = (value: number) => string;
const foo: ReturnType<Func> = "1";
//ReturnType获取到 Func 的返回值类型为 string，所以，foo 也就只能被赋值为字符串了。

//NonNullable：NonNullable<T> 的作用是用来过滤类型中的 null 及 undefined 类型
type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]


//Parameters:Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any? P : never;

type A = Parameters<() =>void>; // []
type B = Parameters<typeof Array.isArray>; // [any]
type C = Parameters<typeof parseInt>; // [string, (number | undefined)?]
type D = Parameters<typeof Math.max>; // number[]
