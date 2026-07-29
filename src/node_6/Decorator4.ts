//类装饰器:禁止类被继承
function sealed(target:any){
    Object.seal(target);
    Object.seal(target.prototype);
    console.log("类已锁定，禁止继承与修改");
}

//类装饰器:自动添加创建时间属性
function addCreateTime<T extends { new(...args: any[]): {} }>(target: T){
    return class extends target {
        createTime = new Date().toLocaleDateString(); // 注意括号
    } as T &  { new(...args: any[]): { createTime: string } };
}

// 类型扩展
interface User {
    createTime: string;
}

/**
 * 装饰器：用于添加创建时间属性
 * 该装饰器会在类上添加一个创建时间的属性
 */
@sealed
@addCreateTime
//@addCreateTime1
class User {
  name: string = "张三";
}

// // 类型扩展 —— 让 TS 知道实例上有 createTime
// interface User {
//     createTime: string;
// }

const u = new User();
console.log(u.createTime); // 自动生成创建时间
console.log(u.name);       // "张三"


function addCreateTime1(target: any) {
    target.prototype.createTime = new Date().toLocaleDateString();
}