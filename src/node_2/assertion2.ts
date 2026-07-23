interface obj{
    name:string;
    age?:number;
    address:{
        city:string;
        street:string;
        houseNum:number;
    }
};

const obj3:obj={
    name:"ali",
    age:20,
    address:{
        city:"tehran",
        street:"ghods",
        houseNum:10
    }
};

const obj4:obj={
    name:"ali",
    age:20,
    address:{
        city:"tehran",
        street:"ghods",
        houseNum:10
    }
};

// console.log(obj1);
// console.log(obj2);

function check(obj1:obj,obj2:obj):boolean{
    if(obj1.name===obj2.name && obj1.age===obj2.age && obj1.address.city===obj2.address.city && obj1.address.street===obj2.address.street && obj1.address.houseNum===obj2.address.houseNum){
        return true;
    }
    else{
        return false;
    }
}
console.log(check(obj3,obj4));

function check1(obj1:obj,obj2:obj):boolean{
    if(obj1===obj2){
        return true;
    }
    else{
        return false;
    }
}
console.log(check1(obj3,obj4));

