//命名空间别名
//多层嵌套命名空间调用路径过长，可通过 import 别名 简化命名，精简代码、提升可读性。
namespace Demo2 {
    export namespace A {
        export namespace B {
            export namespace C {
                export class Demo {
                    public static sayHello() {
                        console.log("Hello World");
                    }
                }
            }
        }
    }

    
}
//简化调用路径
//import { A } from "./Demo2"; //Module '"./Demo2"' declares 'A' locally, but it is not exported.ts
import a =Demo2.A;
a.B.C.Demo.sayHello();

namespace A{
    export namespace B {
        export function C() {
            console.log("Hello World");
        }
    }
}

import b=A.B;
b.C();

