//定义用户模块命名空间
namespace UserModule{
    //私有变量，外部无法范根
    const secreket:string="123456"

    //导出公有接口:外部可使用
    export interface User{
        id:number,
        name:string,
    }

    //导出公有方法:外部可使用
    export function getUserInfo(user:User):string{
        console.log("密钥：", user.name); // 内部可访问私有成员
        return `id:${user.id},name:${user.name}`
    }

    export function setUserInfo(id:number):User{
       return {
            id,
            name: "张三"
        };
    }
}

//外部访问命名空间导出成员
const user=UserModule.setUserInfo(1);
console.log(UserModule.getUserInfo(user));
//console.log(UserModule.secreket); // 私有成员，外部无法访问