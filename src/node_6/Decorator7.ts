// 访问器装饰器：数值范围校验
function Range(min: number, max: number) {
    return function(target:any,key:string,descriptor:PropertyDescriptor) {
        const oldMethod = descriptor.value;
        descriptor.value = function(...args:any[]) {
            for(let i = 0; i < args.length; i++) {
                if(args[i] < min || args[i] > max) {
                    throw new Error(`参数${args[i]}超出了范围${min}~${max}`);
                }
            }
            return oldMethod.apply(this,args);
        }
    }
}

function Range1(min: number, max: number) {
    return function(target:any,key:string,descriptor:PropertyDescriptor) {
        const originSet  = descriptor.set;
        descriptor.set = function(val: number) {
            if (val < min || val > max) {
                throw new Error(`${key}必须在${min}-${max}之间`);
            }
            originSet?.call(this, val);
        }
    }
}

class Student{
    private _score: number;
    constructor(score: number) {
        this._score = score;
    }

    @Range(0,100)
    getScore():number {
        return this._score;
    }

    @Range1(0, 100)
    set score(score: number) {
        this._score = score;
    }
}

const stu = new Student(90);
stu.score = 95;