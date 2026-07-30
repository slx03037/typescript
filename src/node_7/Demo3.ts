//命名空间合并
//第一段命名空间
namespace Animals {
    export class Zebra { }
    export function print(z: Zebra) {
        console.log(z)
    }
}

//第二段命名空间
namespace Animals {
    export class Dog { }
    export function watch(d: Dog) {
        console.log(d)
    }
}

//合并后的命名空间
// namespace Animals {
//     export class Zebra { }
//     export function print(z: Zebra) {
//         console.log(z)
//     }
//     export class Dog { }
//     export function watch(d: Dog) {
//         console.log(d)
//     }
// }
Animals.print(new Animals.Zebra());
Animals.watch(new Animals.Dog());

// 第一段命名空间
namespace UserModule {
  export function login() {
    console.log("登录");
  }
}

// 同名命名空间，自动合并拓展
namespace UserModule {
  export function register() {
    console.log("注册");
  }
}

// 合并后同时拥有两个方法
UserModule.login();
UserModule.register();