const getLength=(target:number|string):number=>{
    if((target as string).length){
        return (target as string).length;
    }else{
        return Number(target);
    }
}

console.log(getLength("222"));

console.log(getLength(222));