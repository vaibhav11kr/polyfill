let arr = [1, 2, [3], [4, [5,[ 6]]]];

console.log(arr.flat(1));

Array.prototype.myFlat = function(){
    let res = [];
    if(!Array.isArray(this)){
        throw new Error("Error");
    }
    
    this.forEach((el)=>{
        if(Array.isArray(el)){
            res.push(...el.myFlat())
        }else{
            res.push(el);
        }
    });
    return res;
}

console.log(arr.myFlat());