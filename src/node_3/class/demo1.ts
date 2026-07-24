//继承
class Vehilce {
    constructor(public name: string) {}
    start():void {
        console.log(`${this.name} start`);
    }
}

class Car extends Vehilce {
    constructor(brand: string, public color: string) {
        super(brand);// 必须调用 super()
    }

    start():void {
        super.start();//调用父类方法
    }
    console() {
        console.log(`color: ${this.color}`);
    }
}

//实现接口
interface Flyable  {
    name: string;
    fly():void;
}

interface Swimmable  {
    name: string;
    swim():void;
}

class Duck implements Swimmable,Flyable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    /**
     * 需要把两个接口的方法都实现
     */
    fly():void {
        console.log(`${this.name} eat`);
    }
    swim():void {
        console.log(`${this.name} swim`);
    }
}

//Getter 和 Setter
class Temperature {
    private _celsius: number;
    constructor(celsius: number) {
        this._celsius = celsius;
    }
    get celsius(): number {
        return this._celsius;
    }
    set celsius(value: number) {
        this._celsius = value;
    }
    get fahrenheit(): number {
        return this._celsius * 1.8 + 32;
    }
    set fahrenheit(value: number) {
        
    }
}

const temp=new Temperature(30);
temp.celsius = 30;
console.log(temp.fahrenheit);

