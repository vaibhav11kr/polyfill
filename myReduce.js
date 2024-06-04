const arr = [1, 2, 3, 4, 50];

Array.prototype.myReduce = function(cb, initialVale){
    let acc = initialVale;
    for(let i=0; i<this.length; i++){
        acc = acc ? cb(acc, this[i]) : this[i];
    }
    return acc;
}
let res = arr.myReduce((acc, curr)=>{
    return acc+curr;
    
}, 90)
console.log(res);