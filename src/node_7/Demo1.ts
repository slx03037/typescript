//多级嵌套命名空间:全局业务模块
namespace MoudleA{
    export namespace MoudleB{
        export class Demo1{
            public say(){
                console.log("Hello World");
            }
        }
    }
    export namespace MoudleC{
        export class Demo2{
            public say(){
                console.log("Hello TypeScript");
            }
        }
    }
}

//调用嵌套命名空间方法
let demo1 = new MoudleA.MoudleB.Demo1();
demo1.say();

let demo2 = new MoudleA.MoudleC.Demo2();    
demo2.say();