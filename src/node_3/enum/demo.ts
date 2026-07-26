//当数字枚举没有指定值时,默认从0开始递增
//未赋值时自动从 0 自增，支持自定义起始值，支持反向映射。
enum OrderStatus {
  PENDING,    // 0
  SUCCESS,    // 1
  FAIL,       // 2
  CANCEL      // 3
}

// 自定义起始值
enum PageStatus {
  DISABLE = 1,  // 自定义起始
  NORMAL,       // 2
  HIDDEN        // 3
}

// 使用
console.log(OrderStatus.SUCCESS); // 1
// 数字枚举专属：反向映射
console.log(OrderStatus[1]); // SUCCESS


//字符串枚举
//所有成员必须手动赋值字符串，无自增、无反向数字映射，状态语义清晰，后端对接零误差。
enum LoginStatus {
  ONLINE = "online",
  OFFLINE = "offline",
  LOCK = "lock"
}

// 正常使用
const status: LoginStatus = LoginStatus.ONLINE;
// 无法反向数字映射，规避错乱取值

//构枚举（数字+字符串混合，极少用）
//同时包含数字、字符串成员，语法合法但业务不推荐，语义混乱、可读性差。
enum MixEnum {
  A = 1,
  B = "test"
}

//量枚举（const 枚举）
/**
 * 使用 const enum 定义，编译后直接删除枚举对象，内联替换数值，减少冗余代码、提升性能。
 * 适用：纯取值、无需遍历、无需反向映射的常量。
 */
const enum Code {
  SUCCESS = 200,
  ERROR = 500
}

// 编译后直接替换为 200，无枚举对象残留
const res = Code.SUCCESS;