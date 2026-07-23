// any 任意类型
let a:any="abc";
a=123;
a=1n;
a=null;
a=undefined;
a=true;
a=Symbol("a");
a=()=>{};


//unknown 未知类型
let u:unknown="abc";
u=123;
u=1n;
u=null;
u=undefined;
u=true;
u=Symbol("a");
//let s:String=u;// 报错，unknown类型不能赋值给其他类型

// 必须类型收窄后才能用
if(typeof u === "string"){
    let s:String=u;// 可以通过类型判断，将unknown类型赋值给其他类型
}



// never 永不类型(不存在得值)
// 1. 报错函数返回 never
function err(msg:string):never{
    throw new Error(msg);
}

// 2. 死循环函数返回 never
function loop():never{
    while(true){}
}

//3.分支穷尽校验(企业级核心用法)
type Status = "success" | "fail";
function handler(s:Status){
    switch(s){
        case "success": break;
        case "fail": break;
        default: const _check:never=s; // 如果没有default分支，就会报错，提示never类型不能赋值给其他类型
        // 以后新增状态会直接报错，强制补全分支
    }
}

// void 空返回类型
function log():void{
    console.log("log");
}