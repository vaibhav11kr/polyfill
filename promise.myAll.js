Promise.myAll = function(promiseArr){
    let res = [];
    let cnt = 0;
    return new Promise((resolve, reject)=>{
        promiseArr.forEach((promise, idx)=>{
            promise.then((res)=>{
                cnt++;
                res[idx] = res;
                if(promiseArr.length == cnt){
                    resolve(res)
                }
            }).catch((err)=>{
                reject(err);
            })
        })
    })
}