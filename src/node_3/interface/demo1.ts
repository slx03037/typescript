//鸭式辨型法
interface LabeledValue{
    label:string
}

function printLabel(labeledObj:LabeledValue):void{
    console.log(labeledObj.label);
}

let myObj = {size:10,label:"Size 10 Object"};

printLabel(myObj);

/**
 * 在参数里写对象就相当于是直接给labeledObj赋值，这个对象有严格的类型定义，
 * 所以不能多参或少参。而当你在外面将该对象用另一个变量myObj接收，myObj不会
 * 经过额外属性检查，但会根据类型推论为
 * let myObj: { size: number; label: string } = { size: 10, label: "Size 10 Object" };，
 * 然后将这个myObj再赋值给labeledObj，此时根据类型的兼容性，两种类型对象，
 * 参照鸭式辨型法，因为都具有label属性，所以被认定为两个相同，故而可以用此法来绕开多余的类型检查。
 */
//printLabel({ size: 10, label: "Size 10 Object" }); // Error

//绕开额外属性检查的方式
//1.类型断言
interface Props { 
  name: string; 
  age: number; 
  money?: number;
}

let p: Props = {
  name: "兔神",
  age: 25,
  money: -100000,
  girl: false
} as Props; // OK

//2.索引签名
interface Props { 
  name: string; 
  age: number; 
  money?: number;
  [key: string]: any;
}

let ps: Props = {
  name: "兔神",
  age: 25,
  money: -100000,
  girl: false
}; // OK
//索引签名可以用来描述对象的属性,也可以用来描述数组的元素
interface RoleDic{
    readonly [index:number]:string;
}

const role:RoleDic = {
    0:"super_admin"
};

//role[0]="hello world"; //error 类型报错误 因为readonly只读

interface Point1 {
  x: number;
  y: number;
}


interface SetPoint1 {
  (x: number, y: number): void;
}

type Point2 = {
  x: number;
  y: number;
};

type SetPoint2 = (x: number, y: number) => void;


//与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
let div = document.createElement('div');
type B = typeof div;



interface Point { x: number; }
interface Pointz { x: number;y: number; }
const pointz: Pointz = { x: 1, y: 2 };
//const point: Point = { x: 1, y: 2 };//Error


//两者的扩展方式不同，但并不互斥。接口可以扩展类型别名，同理，类型别名也可以扩展接口。
// 接口的扩展就是继承，通过 extends 来实现。类型别名的扩展就是交叉类型，通过 & 来实现。
interface PointX {
    x: number
}

interface Point extends PointX {
    y: number
}

type PointY = {
    x: number
}

type PointK = PointY & {
    y: number
}

//接口扩展类型别名
interface Point extends PointK {
    s: number
}

//类型别名扩展接口
type PointJ = Point & {
    y: number
}