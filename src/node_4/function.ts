//函数声明
function sum(x: number, y: number): number {
    return x+y;
}

//函数表达式
let mySum:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y;
}

//用接口定义函数类型
/**
 * 采用函数表达式接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
 */
interface SearchFunc{
    (source:string,substring:string):boolean;
}

//可选参数
function bulidName(firstName:string,lastName?:string){
    /**
     * 注意点：可选参数后面不允许再出现必需参数
     */
    if(lastName){
        return firstName+lastName;

    }else{
        return firstName;
    }
}
let tomcat=bulidName('Tom','Cat');
console.log(tomcat);
let tom=bulidName('Tom');
console.log(tom);

//参数默认值
function buildName(firstName:string,lastName:string='Cat'){
    return firstName+lastName;
}

let tomcats=buildName('Tom','Cat');
console.log(tomcats);
let toms=buildName('Tom');
console.log(toms);

//剩余参数
function push(array:any[],...items:any[]){
    items.forEach(function(item){
        array.push(item);
    });
}
let a:string[]=[];
push(a,1,2,3);

//函数重载
function add(x:any,y:any){
    return x+y;
}
type Combinable = string | number;
function add1(x:Combinable,y:Combinable){
    if (typeof x === 'string' || typeof y === 'string') {
     return x.toString() + y.toString();
    }
    return x+y;
}

const result = add1('Semlinker', ' Kakuqo');
//result.split(' ');//Property 'split' does not exist on type 'number'.

type Types = number | string
function adds(a:number,b:number):number;
function adds(a: string, b: string): string;
function adds(a: string, b: number): string;
function adds(a: number, b: string): string;
function adds(a:Types, b:Types) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const results = adds('Semlinker', ' Kakuqo');
results.split(' ');

//


