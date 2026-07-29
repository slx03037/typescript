//属性装饰器
/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数： 
 * 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。 
 * 2、成员的名字。
 */

//类装饰器
function logClass(params:string){
    return function(target:any){
        /**
         * 4:class{constructor(){this.url="http://www.baidu.com__";this.urlDate="2020-01-02"}getData(){console.log(this.url);console.log(this.urlDate)}}
         * 5:http://www.baidu.com
         * http://www.baidu.com__
         * 2020-01-02
         */
        console.log("4:"+target); //类对象
        console.log("5:"+params);    //类装饰器传参
    }
}

//属性装饰器
function logProperty(params:any){
    return function(target:any,attrName:any){
        /**
         * 注解先执行
         * 1:[object Object]
         * 2:url  类的参数 url
         * 3:http://www.baidu.com123   类的参数url里的值 http://www.baidu.com123
         * 1:[object Object] 
         * 2:urlDate 类的参数 urlDate
         * 3:2020-01-01 类的参数urlDate里的值 2020-01-01
        */
        console.log("1:"+target); //类的属性对象
        console.log("2:"+attrName);  //类注解里的参数属性名
        console.log("3:"+params);  //function里的参数 
    }
}


@logClass("类的对象")
class HttpClient{
    @logProperty("http://www.baidu.com123")
    url:string | undefined;
    @logProperty("2020-01-01")
    urlDate:string | undefined;
    constructor(){
        /**
         * 先执行注解 最后调用构造参数
         */
        this.url = "http://www.baidu.com__";
        this.urlDate = "2020-01-02";
    }
    getData(){
        console.log(this.url);     //http://www.baidu.com__  
        console.log(this.urlDate); ////2020-01-02
    }
}
let http = new HttpClient();
http.getData();
  /**
    * 先执行注解 最后调用构造参数
    */
console.log(http.url);//http://www.baidu.com__
console.log(http.urlDate);//2020-01-02


/**
 * 1:[object Object]
 * 2:url
 * 3:http://www.baidu.com123
 * 1:[object Object]
 * 2:urlDate
 * 3:2020-01-01
 * 4:class{constructor(){this.url="http://www.baidu.com__";this.urlDate="2020-01-02"}getData(){console.log(this.url);console.log(this.urlDate)}}
 * 5:http://www.baidu.com
 * http://www.baidu.com__
 * 2020-01-02
 */

