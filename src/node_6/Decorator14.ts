//方法装饰器

/**
 * 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
 * 方法装饰会在运行时传入下列 3 个参数：
 * 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2、成员的名字。
 * 3、成员的属性描述符。
 */
/**注意：在 vscode 编辑时有时会报作为表达式调用时，无法解析方法修饰器的签名。错误，此时需要在 tsconfig.json 中增加 target 配置项： */
/**
 * {
    "compilerOptions":{
    "target":"es2020",
    "experimentalDecorators":true,
    }
}
 */
function get(params:any){
    console.log(params);
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        target.apiUrl="http://www.baidu.com";
        target.run=function(){
            console.log("run");
        }
    }
}

class HttpClient{
    public apiUrl:string | undefined;
    constructor(){
        
    }

    @get("http://www.baidu.com") 
    getData(url:string){}
}

interface HttpClient{
    run():void;
}

const http = new HttpClient();
console.log(http.apiUrl);
http.run();

/**
 * http://www.baidu.com
 * {}
 * getData
 * {
 *      value: [Function: getData],
 *      writable: true,
 *      enumerable: false,
 *      configurable: true
 * }
 * http://www.baidu.com
 * run
 */


