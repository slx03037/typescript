//属性装饰器
/**
 * 属性装饰器顾名思义，用来装饰类的属性。它接收两个参数：
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 被装饰类的属性名
 */
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
function logProperty(target:any,key:string){
    delete target[key];

    const backingField="_"+key;

    Object.defineProperty(target,backingField,{
        writable:true,
        enumerable: true,
        configurable:true
    })


    const getter =function(this:any){
        const currval=this[backingField];
        console.log(`Get: ${key} => ${currval}`);
        return currval;
    }

     const setter = function (this: any, newVal: any) {
        console.log(`Set: ${key} => ${newVal}`);
        this[backingField] = newVal;
    };

}


class Person{
    @logProperty3
    name:string; // 装饰器会删除这个属性，然后重新定义这个属性

    constructor(name:string){
        this.name=name;
    }
}

const p=new Person("test");
p.name="test2";

function logProperty3(target: any, context: ClassFieldDecoratorContext) {
    const { name, kind, access } = context;
    
    // 确保这是一个属性装饰器
    if (kind !== "field") {
        throw new Error("logProperty3 can only be used on fields");
    }
    // 保存原始的 getter 和 setter
    const originalGetter = access.get;
    const originalSetter = access.set;
    return function (this: { [key: string]: any }, initialValue: any) {
        const backingField = "_" + this.name;
        
        // 在原型上定义 backingField
        Object.defineProperty(this, backingField, {
            writable: true,
            enumerable: true,
            configurable: true,
            value: initialValue
        });

        // 创建 getter 和 setter
        return {
            get():any {
                const currval=(this as any)[backingField]; // 获取 backingField 的值
                //const currVal = this[backingField];
                //console.log(`Get: ${name} => ${currVal}`);
                console.log(`Get: ${String(name)} => ${currval}`);
                return currval;
            },
            set(newVal: any) {
                console.log(`Set: ${String(name)} => ${newVal}`);
                (this as any)[backingField] = newVal;
            }
        };
         // 返回初始值
        return initialValue;
    };
}

//方法装饰器
/**
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 方法名
 * descriptor: TypePropertyDescript - 属性描述符
 */
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol,
     descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
   
     
function logOutPut(target: any, context: ClassMethodDecoratorContext) {
    const { name, kind } = context;
    
    // 确保这是一个方法装饰器
    if (kind !== "method") {
        throw new Error("logOutPut can only be used on methods");
    }
console.log('target:', target);
console.log('name:', name);
console.log('target[name]:', target[name]);
console.log('Object.getOwnPropertyNames(target):', Object.getOwnPropertyNames(target));
    //const originalMethod =  access.get(target);
     // 注意：这里需要使用类的原型来获取原始方法
    //const originalMethod = target[name];
      // 返回一个新的方法来替换原始方法
      const originalMethod = target[name] ?? target.prototype?.[name];
    return function(this: any,...args: any[]): any {
         // 使用 access.get 方法获取原始方法
       // const originalMethod = access.get(this);
        console.log("loggedOutput");
        let result: any = originalMethod.apply(this, args);
        
        if (!this.loggedOutput) {
            this.loggedOutput = new Array<any>();
        }
        
        this.loggedOutput.push({
            method: name,
            parameters: args,
            output: result,
            timestamp: new Date()
        });
        
        return result;
    };
}

class Calculator{
    loggedOutput: Array<{ method: string | symbol, parameters: any[], output: any, timestamp: Date }> = [];
    @logOutPut1
    double(num:number):number{
        return num*2;
    }
}
let calc = new Calculator();
calc.double(11);

// console ouput: [{method: "double", output: 22, ...}]
console.log(calc.loggedOutput); 

function logOutPut1(target: any, context: ClassMethodDecoratorContext) {
    // 尝试从 target 或 target.prototype 获取原始方法
    const { name, kind } = context;
    if (kind !== "method") {
        throw new Error("logOutPut can only be used on methods");
    }

    // 兼容 target 可能是原型或构造函数
    let originalMethod = target[name];
    if (!originalMethod && target.prototype) {
        originalMethod = target.prototype[name];
    }
    if (typeof originalMethod !== 'function') {
        throw new Error(`Method ${String(name)} not found on target or its prototype`);
    }

    // 返回包装函数，闭包保存 originalMethod
    return function(this: any, ...args: any[]): any {
        console.log("loggedOutput");
        const result = originalMethod.apply(this, args);

        if (!this.loggedOutput) {
            this.loggedOutput = [];
        }
        this.loggedOutput.push({
            method: name,
            parameters: args,
            output: result,
            timestamp: new Date()
        });

        return result;
    };
}