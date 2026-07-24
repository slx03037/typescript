class User {
  // 属性
  id: number;
  name: string;

  // 构造函数：实例化时自动执行
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // 实例方法
  sayHi() {
    console.log("你好，" + this.name);
  }
}

// 实例化
const user = new User(1001, "张三");
user.sayHi();

