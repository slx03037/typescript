//类装饰器重载构造函数
/**
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 *  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
 */
function logClas(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any= '修改后的url:http://www.baidu.com';
        getData(){
            console.log(this.apiUrl);
        }
        /**
         * 装饰器的工作流程
         * 装饰器接收目标类作为参数
         * 返回一个新的类，这个新类继承自原始类
         * 在新类中：
         *      首先声明 apiUrl 属性，类型为 string
         *      添加构造函数，在其中修改 apiUrl 的值并输出
         *      最后定义 getData() 方法
         */
        constructor() {
            super();
            this.apiUrl = this.apiUrl + "____";
            console.log(this.apiUrl);
        }
        /**
         * 注意：
         * 1.类的属性声明必须放在方法声明之前
         * 2.所有属性都应该有明确的类型注解
         * 3.如果需要在构造函数中访问或修改属性，应该显式定义构造函数
         * 4.在继承类中，如果重写父类属性，应该使用 super() 调用父类构造函数
         */
    }
}

@logClas
class HttpService{
    apiUrl:string;
    constructor(){
        this.apiUrl = '构造参数里的:http://www.91.com';
    }
    getData(){
        console.log(this.apiUrl);
    }
}
let httpService = new HttpService();
httpService.getData();