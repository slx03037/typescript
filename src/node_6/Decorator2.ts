//参数装饰器
//参数装饰器声明：
/**
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 方法名
 * parameterIndex: number - 方法中参数的索引值
 */
// // 参数装饰器声明（新版 API）
// declare type ParameterDecorator = (target: any, context: DecoratorContext) => void;


function ParamRequired() {
  return function (target: any, methodName: string, index: number) {
    console.log(`方法${methodName}第${index+1}个参数为必填项`);
  };
}
// 参数装饰器应用在类方法的参数上

class Greeter {
    
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    
    
    greet(@ParamRequired()  prefix:  string) {
        console.log(`${prefix} ${this.greeting}`);
    }
}

let greeter = new Greeter("world");
greeter.greet("Hello");

//The parameter in position 0 at Greeter has been decorated