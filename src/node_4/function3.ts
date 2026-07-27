//可选参数
//参数可传可不传，可选参数必须放在必选参数后面。
function getUserInfo(name:string,age?:number):string{
    return age? `${name} ${age} 岁`: name ;
}
const msg :string=getUserInfo("张三"); // 合法
console.log(msg);

const msg1=getUserInfo("李四", 18); // 合法
console.log(msg1);


//默认参数
//参数有默认值，调用函数时，如果没有传递该参数，则使用默认值。
function createUser(name:string,age:number=18):string{ 
    return 'success'+`${name} ${age}`;
}
console.log(createUser("张三")); // success张三 18


//剩余参数（不定长参数）
//使用 ... 接收多个剩余参数，剩余参数一定是数组类型。
//接收多个数字累加
function total(...nums:number[]):number{
    return nums.reduce((pre,cur)=>pre+cur,0);
}
console.log(total(1,2,3,4,5)); // 15total(1, 2, 3, 4)