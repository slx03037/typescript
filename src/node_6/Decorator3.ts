//装饰器工厂（带参数装饰器）
// 装饰器工厂：可接收自定义参数
function logInfo(message: string) {
    // 返回真正的装饰器函数
    return function(target:any){
        console.log("装饰器入参：", message);
        console.log("被装饰目标：", target);
    }
}

//使用：自定义文案增强类
 @logInfo("user类")
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const user=new User("张三");
