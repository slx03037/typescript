//断言
const  unknownData="hello world";
const str = <string>unknownData; //旧语法 ts(2304)


//“尖括号” 语法
let someValue:any="this is a string";
let strLength:number=(<string>someValue).length;
console.log(strLength);

//as 语法
let strLength2:number=(someValue as string).length;
console.log(strLength2);

//as 使用
const getLength=(target:number|string):number=>{
    if((target as string).length){
        return (target as string).length;
    }else{
        return Number(target);
    }
}

console.log(getLength("222"));

console.log(getLength(222));


const arrayNumber:number[]=[1,2,3,4,5];
//const greaterThan1:number = arrayNumber.find(num=>num>2);//ts 2322
const greaterThan2:number = arrayNumber.find(value=>value>2) as number; 
console.log(greaterThan2);

//非空断言
let mayNullOrUndefinedOrString: null|undefined|string;
//mayNullOrUndefinedOrString!.toString(); //运营报错 Cannot read properties of undefined (reading 'toString')
mayNullOrUndefinedOrString?.toString();
//mayNullOrUndefinedOrString.toString();//ts(18049)

type NumGenerator=()=>number;
function myFunc(numGenerator:NumGenerator |undefined):void{
     // Object is possibly 'undefined'.(2532)
    // Cannot invoke an object which is possibly 'undefined'.(2722)

    /**
     *  x! 将从 x 值域中排除 null 和 undefined 
     */
    //const num1=numGenerator();//Error ts(2722)
    const num2 = numGenerator!(); //OK
}

//确定赋值断言
let x:number;
initialize();

// Variable 'x' is used before being assigned.(2454)
function initialize(){
    x=10;
}
//允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值
//console.log(2 * x); // Error ts(2454)

let y!:number;
/**
 * 初始化函数1
 * 该函数用于初始化变量y的值为10
 */
function initialize1(){
    y=10; // 将变量y赋值为10
}

console.log(2 * y);//ok


//unknown 类型精准收窄
function getApiData():unknown{
    return "success data";
}

const data = getApiData() as string;
data.toUpperCase();
console.log(data);

//联合类型精准锁定子类型
type Res=string|number;
let result: Res="hello world";

//断言为字符串，调用字符串专属方法
const strs=result as string;
console.log(strs.toUpperCase());

//DOM 获取元素精准断言
// 原生推导：HTMLElement | null，无 value 属性
const input = document.getElementById("input") as HTMLInputElement;
// 断言后可正常使用 input 专属 value
console.log(input.value);
