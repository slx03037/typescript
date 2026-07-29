//方法装饰器三
/**
 * 参数装饰器表达式会在运行时当作函数被调用，传入下列 3 个参数：
 * 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2、方法的名字。
 * 3、参数在函数参数列表中的索引。
 */
function logParameter(params:any) {
    console.log(params);
    return function(target:any, methodsName:string, parameterIndex:number) {
        console.log(target);
        console.log(methodsName);
        console.log(parameterIndex);
    }
}

class HttpClient {
    public url:any|undefined;
    constructor() {
    }

    getData(@logParameter('uuid') uuid:any) {
        console.log("getData:"+uuid);
            
    }
}
const httpClient = new HttpClient();
httpClient.getData(123);
