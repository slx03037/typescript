//Union  联合类型
// ID支持字符串或数字
type Id = string | number;

// 状态多值联合
type Status = "success" | "fail" | "loading";

const orderStatus: Status = "success";


//Intersection 交叉类型
type User ={name: string; age: number};

type Vip={ vipLevel: number; expireTime: string}
//合并两个类型：同时拥有所有属性
type UserVip = User & Vip;

const user: UserVip = {
  name: "张三",
  age: 18,
  vipLevel: 3,
  expireTime: "2026-12-31"
};

//Literal 字面量类型
//写法1 类型[]（常用、简洁）
const numArr: number[]=[1,2,3,4,5];
const strArr: string[]=["a","b","c","d","e"];

// 写法2：Array<类型>（泛型写法，适配复杂场景）
const boolArr: Array<boolean> = [true, false];

console.log(boolArr);