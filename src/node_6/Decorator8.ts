// 参数装饰器：标记必填参数
function Required(target: any, methodName: string, index: number) {
   console.log(`方法${methodName}第${index+1}个参数为必填项`);
   if(index === 0) {
       console.log('name参数必填');
   }
}

class User {
    getUser(@Required name: string, age: number) {}
}

new User().getUser('张三', 18);