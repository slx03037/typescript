//方法装饰器二
//在方法装饰器里面修改当前方法,把当前方法里面的参数修改成字符串
function get(params:any){
    console.log(params)

    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
        const originalMethod = descriptor.value; // ✅ 保存原始方法
        //修改装饰器的方法﹑把装饰器方法里面传入的所有参数改为string类型
        //1、保存当前的方法
        descriptor.value = function(...args:any[]){
            args = args.map(item=>String(item))
            console.log(args)
            //return descriptor.value.apply(this,args) //❌ 这里调用的是新函数自身（递归）
             // 调用原始方法，并传递转换后的参数
            return originalMethod.apply(this, args);
        }
    }
}

class HttpClient{
    public url:any|undefined;

    constructor(){}

    @get("http://www.baidu.com")
    /**
     * 获取数据的方法
     * @param args 接收任意数量的参数，参数类型为any
     */
    getData(...args:any[]){ // 使用剩余参数语法接收任意数量的参数
        console.log("getData:"+args); // 输出getData和接收到的参数
    }
}
const http = new HttpClient()
//http.getData(123,456)
http.getData(123, 456, true);

