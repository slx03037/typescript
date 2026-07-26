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


//字符串枚举