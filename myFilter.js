const arr = [1, 2, 3, 4, 50];


Array.prototype.myFilter = function(cb){
    let res = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            res.push(this[i]);
        }
    }
    return res;
}

let res = arr.myFilter((el)=>{
    return el>2;
})
console.log(res);