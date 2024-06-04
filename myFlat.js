let arr = [1, 2, [3], [4, [5, 6]]];

console.log(arr.flat(1));

Array.prototype.myFlat = function(depth){
    let res = [];
    if(!Array.isArray(this)){
        throw new Error("Error");
    }
    
    this.forEach((el)=>{
        if(Array.isArray(el) && depth>0){
            res.push(...el.myFlat(depth-1))
        }else{
            res.push(el);
        }
    });
    return res;
}

console.log(arr.myFlat(2));