//函数返回值专属类型
//void 无返回值 表示函数没有 return 有效返回值，仅执行逻辑。
function logMsg(msg:string):void{
    console.log("消息:"+msg);
     // 禁止 return 具体值
}

//never 永不返回值，表示函数无法正常终止，一般用于抛出异常或无限循环
//报错终止，代码永远结束不了
function errorMsg(msg:string):never{
    throw new Error(msg);
}

//死循环永不结束
function loop():never{
    while(true){
        console.log("死循环");
    }
}