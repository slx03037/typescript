//装饰器求值
/**
 * 类的定义中不同声明上的装饰器将按以下规定的顺序引用：
 * 1.参数装饰器，方法装饰器，访问符装饰器或属性装饰器应用到每个实例成员；
 * 2.参数装饰器，方法装饰器，访问符装饰器或属性装饰器应用到每个静态成员；
 * 3.参数装饰器应用到构造函数；
 * 4.类装饰器应用到类。
 */

//类装饰器
/**
 * 类装饰器在类声明之前声明，要记着装饰器要紧挨着要修饰的内容，类装饰器应用于类的声明。
 * 类装饰器表达式会在运行时当做函数被调用，它由唯一一个参数，就是装饰的这个类。
 */
let sign = null;
function setName(name:string){
    return function(target:Function){
        sign = target;
        //target.prototype.name = name;
        // 使用 Object.defineProperty 来设置类的 name 属性
        Object.defineProperty(target, 'name', {
            value: name,
            writable: false,
            configurable: true
        });
    }
}

@setName('张三')
class Person{
    constructor(){
        //console.log(sign);
    }
}
/**
 * 可以看到，我们在装饰器里打印出类的 name 属性值，也就是类的名字，
 * 我们没有使用 Info 创建实例，控制台也打印了"Info"，因为装饰器作用与装饰的目标声明时
 * 而且我们将装饰器里获取的参数 target 赋值给 sign，
 * 最后判断 sign 和定义的类 Info 是不是相等，如果相等说明它们是同一个对象，结果是 true。
 * 而且类 Info 的原型对象的 constructor 属性指向的其实就是 Info 本身。
 */
console.log(Person.name); //Person
console.log(sign === Person); //true
console.log(sign=== Person.prototype.constructor); //true

function logClass(params:any){
    console.log(params);
    //params就是当前类
    params.prototype.apiUrl = 'http://www.baidu.com';
    params.prototype.run = function(){
        console.log('run method');
    }
}

@logClass
class HttpClient{
    constructor(){
        
    }
    getData(){}
}

var http:any=new HttpClient();
console.log(http.apiUrl);
http.run();