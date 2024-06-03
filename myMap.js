const arr = [1, 2, 3, 4, 50];


Array.prototype.myMap = function(cb){
    let res = [];
    for(let i=0; i<this.length; i++){
        res.push(cb(this[i], i, this));
    }
    return res;
}

const res = arr.myMap((el)=>{
    return el*2;
})
console.log(res);