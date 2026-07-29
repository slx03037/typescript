//装饰器加载顺序
function ClassDecorator() {
    return function (target: any) {
        console.log('类装饰器')
    }
}

function MethodDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('方法装饰器')
    }
}

function ParameterDecorator() {
    return function (target: any, propertyKey: string, parameterIndex: number) {
        console.log('参1数装饰器')
    }
}
function Parameter2Decorator() {
    return function (target: any, propertyKey: string, parameterIndex: number) {
        console.log('参2数装饰器')
    }
}

function PropertyDecorator() {
    return function (target: any,  propertyName: string) {
        console.log('属性装饰器')
    }
}

@ClassDecorator()
class HttpClient {
    
    @PropertyDecorator()
    url: string = 'http://www.baidu.com'

    @MethodDecorator()
    getData(@ParameterDecorator()param: string,@Parameter2Decorator() param2: string) {
        
    }
}
console.log(new HttpClient())
/**
 * 属性装饰器
 * 参数装饰器
 * 参数装饰器
 * 方法装饰器
 * 类装饰器
 * HttpClient { url: 'http://www.baidu.com' }
 */

/**
 * 1、属性装饰器 》方法装饰器》方法参数 装饰器》类装饰器
 * 2、如果有多个同样的装饰器时：从最后一个装饰器依次向前执行
 * 3、方法装饰器和属性装饰器，谁在前面谁先执行。因为参数属于方法一部分，所以参数会一直紧紧挨着方法执行。上述例子中属性和方法调换位置，输出如下结果：
 */