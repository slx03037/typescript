//装饰器工厂(可传参)
//target 就是类 params 就是参数
function logClass(params: string) {
  return function (target: any) {
    console.log("装饰器的参数:"+params);
    console.log("调用装饰器的类:"+target);
    target.prototype.apiUrl=params;
    };
}

@logClass('http://www.baidu.com')
class HttpClient {
  constructor() {}
/**
 * 获取数据的方法
 * 该方法用于从数据源获取所需的数据
 */
  getData() {}      
}
let http=new HttpClient();
http.getData();