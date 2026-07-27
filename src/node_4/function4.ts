//方法重载
//重载1：参数为数字，返回为数字字符串
function formaVal(n: number): string;
//重载2:参数为字符串，返回字串去除空格
function formaVal(s: string): string;

//统一实现
function formaVal(n:number|string):string{
    if(typeof n==='number'){
        return n.toString();
    }
    return n.trim();
}

formaVal(123);    // string
formaVal("  abc "); // string

//基础约束
const add=(a:number,b:number):number=>a+b;

//函数类型别名复用
type BoolFn=(flag:boolean)=>boolean;
const getStatus1:BoolFn = (flag)=> flag ? true : false;
const getStatus: BoolFn = (flag) => flag;

type StrFn=(flag:boolean)=>string;
const getStatusCode:StrFn = (flag)=> flag ? "成功" : "失败";

//高阶函数：参数是函数 / 返回值是函数，广泛用于封装工具、防抖节流、回调逻辑。
// 接收一个回调函数
function handleList(list:number[],cb:(item:number)=>void):void{
    list.forEach(item=>cb(item));
}

handleList([1,2,3],item=>console.log(item));