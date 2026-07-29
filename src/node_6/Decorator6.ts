// 属性装饰器：设置属性默认值
function defaultVal(val: any) {
    return function(target:any,propName:string){
        target[propName] = val
    }
}

// 属性装饰器：非空校验
function required1() {
  return function (target: any, propName: string) {
    Object.defineProperty(target, propName, {
      set(newVal) {
        if (!newVal) throw new Error(`属性${propName}不能为空`);
      }
    });
  };
}


//属性装饰器:非空校验
function required(){
    return function(target:any,propName:string){
        let value = target[propName]
        Object.defineProperty(target,propName,{
            get(){
                return value
            },
            set(val){
                if(val === undefined || val === null){
                    throw new Error(`${propName} is required`)
                }
                 if (!val) throw new Error(`属性${propName}不能为空`);
                value = val
            }
        })
    }
}

class User{
    @defaultVal('default')
    name:string;

     @required()
     userName:string;

     @required1()
     password:string;

    constructor(name:string,userName:string,password:string){
        this.name = name
        this.userName = userName
        this.password = password
    }
}

const user = new 
User('user','','123')
console.log(user)