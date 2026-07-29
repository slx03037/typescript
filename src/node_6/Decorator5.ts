//方法装饰器：统一打印方法执行日志
function methodLog(){
    return function(target:any,methodName:string,descriptor:PropertyDescriptor){
       //保存原方法
       const originFn=descriptor.value;

       //重写方法
       descriptor.value=function(...args:any[]){
           console.log(`方法${methodName}开始执行`);
             // 执行原方法并返回结果
           const result=originFn.apply(this,args);
           console.log(`方法${methodName}执行结束`);
           return result;
       }
    }
}

class UserService{
    @methodLog()
    login(username:string,password:string){
        console.log(`执行登录操作，用户名：${username}，密码：${password}`);
    }
}

new UserService().login('admin','123456');