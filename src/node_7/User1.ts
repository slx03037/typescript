//import { User } from "./User";
import User = require("./User");

namespace UserModule {
    export function getUser(): User {
    return { id: 1001, name: "张三" };
  }
}
console.log(UserModule.getUser());