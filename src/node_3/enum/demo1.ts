//数字枚举
//当数字枚举没有指定值时,默认从0开始递增
enum Status {
    delete,//0
    add,//1
    update//2
}
console.log(Status.delete)//0
console.log(Status.add)//1
console.log(Status.update)//2

//指定了具体的值
enum Status {
    deletes = 10,//1
    adds,//2
    updates//3
}

console.log(Status.delete)//0
console.log(Status.deletes)//10

const status=0;

enum Index{
    a=status,
    b,
    c=1
}

const getValue=()=>{
    return 0;
}
enum Index2{
    a=getValue(),
    //b ,//error枚举成员必须要具有初始化值
    c=2,
    d 
}

//反向映射
//反向映射是指,枚举成员的值可以反向映射到枚举成员的名称 仅仅支持数字枚举.字符串枚举不支持
enum Status {
    Success = 1,
    NotFoud=404,
    Error=500
}
console.log(Status[1])//Success
console.log(Status[404])//NotFoud
console.log(Status[500])//Error
console.log(Status['Error'])//error


//字符串枚举
//字符串枚举要求每个字段的值 都必须是字符串字面量
enum Message{
    Success='成功',
    Error='失败'
}
console.log(Message.Success)//成功

//其他例子
enum Message{
    ServerError=Error,
    ClientError=Error
    //Error=500//error  
}
console.log(Message.ServerError)//Error
console.log(Message.ClientError)//Error

//既有数字又有字符串的枚举
enum Result{
    Fail=0,
    Success="success"
}