class user{
    public name:string;
    private password:string; //外部类无法访问 

    /** 
     * 雷利需要加构造参数 否则属性要初始化
     */
    constructor(name:string,password:string){
        this.name = name;
        this.password = password;
    }
}

//类的继承
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
       console.log(this.name)
  }
 
}

/**
 * 学生类，继承自Person类
 * 表示一个学生对象，包含学生姓名和学号
 */
class Student extends Person {
  // 学生学号属性
  stuId: number;
  /**
   * 构造函数
   */
  constructor(name: string, stuId: number) {
    super(name); // 调用父类构造函数初始化姓名
    this.stuId = stuId; // 初始化学号属性
  }
}

const stu:Person = new Student('雷利', 1001);
stu.getName();
const stu1:Student = new Student('雷利', 1001);
stu1.getName();
const p:Person = new Person('雷利');
p.getName();
//p.name = '张三'; //p.name = 'alice'; // 报错，无法访问私有属性