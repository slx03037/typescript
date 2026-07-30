/// <reference path="./User.ts" />


namespace UserModule {
export interface User {
    id: number;
    name: string;
  }
  
  export function getUser(): User {
    return { id: 1001, name: "张三" };
  }
}
console.log(UserModule.getUser());