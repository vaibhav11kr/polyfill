const arr = [1, 2, 3, 4, 5];
// console.log(arr)

Array.prototype.myForEach = function(cb){
    for(let i = 0; i<this.length; i++){
        cb(this[i], i, this);
    }
}

arr.myForEach((el)=>{
    console.log(el*2);
});