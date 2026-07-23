let specifiedStr: 'this is string' = 'this is string';
let str: string = 'any string';
// specifiedStr = str; // ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'
str=specifiedStr;

let specifiedNum: 1 = 1;

let num: number = 1;

//specifiedNum=num; // num = specifiedNum; // ts(2322) 类型 '1' 不能赋值给类型 'number'
num=specifiedNum


let specifiedBoolean: true = true;

//双重断言
//当类型转换跨度太大时，可以使用双重断言
// ❌ 错误：从 string 到 number 的转换跨度太大
// let x = "hello" as number; // 错误

// ✅ 先转为 any 再转为目标类型（双重断言）
let x=("hellon" as any) as number; // 绕过类型检查 注意：谨慎使用，这完全绕过了类型检查

console.log(x); // 123

//as const是 TypeScript 3.4 引入的，用于将值断言为字面量类型
// 普通 let 推导为 string
let i ="hello"; // x: string
// as const 推导为字面量类型
let j="hello" as const; // x: "hello" 
const z="hello"; // z: "hello" (const 也会推导为字面量类型)

//数组得as const
const arr1 = [1, 2, 3];// arr1: number[]
const arr2 = [1, 2, 3] as const; // arr1: readonly [1, 2, 3]

//对象得 as const
const config={
    type: "circle"
    ,radius: 10
} as const;
/**
 * config 得类型为:
 * readonly type: "circle";
 * readonly radius: 10;
 */

const Colors={
    red: "red",
    blue: "blue",
    green: "green"
} as const;
type Color= typeof Colors[keyof typeof Colors]; // "red" | "green" | "blue"
let color: Color = "red"; // ✅
// color = "black"; // ❌

//将 any 或 unknown 转换为具体类型
// 从 JSON 解析的数据
let data:unknown= JSON.parse('{"name": "Alice"}');

//使用类型断言告诉 TypeScript 数据的形状
type User={
    name: string;
    age: number;
}

const user:User=data as User;

console.log(user.name); // ✅ TypeScript 现在知道类型

// TypeScript 只知道是 HTMLElement，不知道具体类型
const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = myCanvas.getContext("2d"); // ✅ 正确

// 或者使用非空断言（假设元素一定存在）
const  myCanvas2 =document.getElementById("myCanvas")!;

//联合类型收窄
interface Cat {
 name:string;
 meow():void;
}

interface Dog {
 name:string;
 bark():void;
}

function getPet(isCat: boolean): Cat | Dog{
return isCat ? { name:"Fluffy", meow:()=>{} } : { name:"Rex", bark:()=>{} };
}

const pet = getPet(true);
// 使用类型断言告诉编译器具体类型
(pet as Cat).meow(); // ✅ 现在可以调用 meow

// 联合类型表示不同的 API 响应状态
type ApiResponse<T> = 
    | {status:"loading"}
    | {status:"success", data:T}
    | {status:"error", error:string};




function handleApiResponse<T>(response:ApiResponse<T>){
    switch(response.status){
        case "loading":
            return "Loading...";
        case "success":
            return response.data;
        case "error":
            return `Error: ${response.error}`;
        default:
            const _exhaustiveCheck: never = response;
            return _exhaustiveCheck;    
    }
}

// 使用交叉类型扩展 API 配置
type BaseConfig={
    url:String;
    timeout:number;
}

type AuthConfig={
    authToken:string;
}

type LogginConfig={
    logLevel?: "debug"| "info"| "warn"| "error";
}

type ApiConfig=BaseConfig & Partial<AuthConfig> & Partial<LogginConfig>;

const configs : ApiConfig={
    url: "https://api.example.com",
    timeout: 5000,
    authToken: "1234567890",
    //logLevel: "debug"
}

//组件 Props 设计
// 联合类型用于组件 Props
type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize= "small" | "medium" | "large";

interface BaseButtonProps {
    variant: ButtonVariant;
    size: ButtonSize;
    children: string;
    disabled?: boolean;
};

// 使用交叉类型扩展
type ButtonProps =BaseButtonProps & (
    | {as : "button"; type?:"button" | "submit" | "reset"}
    | {as : "a"; href:string;target?:"_blank" | "_self" | "_parent" | "_top"}
);
function Button(props: ButtonProps){
// 实现...
}

//Redux Action 设计

// 定义 Todo 对象的形状
interface Todo {
    id: string;
    text: string;
    completed: boolean;
}
interface AddTodoAction{
    type:"ADD_TODO"
    payload:{
        id:string;
        text:string;
    }
}

interface ToggleTodoAction {
    type:"TOGGLE_TODO";
    payload: {
        id:string;
  };
}

interface DeleteTodoAction {
    type:"DELETE_TODO";
    payload: {
        id:string;
  };
}

type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

function  todoReducer(state: Todo[],action:TodoAction):Todo[]{
    switch(action.type){
        case "ADD_TODO":
            return[...state, {
                id: action.payload.id,
                text: action.payload.text,
                completed:false
            }];
        case "TOGGLE_TODO":
            return state.map(todo=>
                todo.id === action.payload.id
                ? { ...todo, completed: !todo.completed }
                : todo
            );
        case "DELETE_TODO":
            return state.filter(todo=>todo.id!==action.payload.id);
        default:
            const _exhaustiveCheck: never = action;
            return _exhaustiveCheck;
    }
}