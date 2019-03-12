// promise :异步编程的解决方案：一般都有三种状态：进行中，已完成 已失败

//基本用法 ：

let promise = new promise((resolve,reject) =>{
    if(success) {
        resolve(a);
    }else {
        reject(err);
    }
});

//2

function promise(){
    return new Promise((resolve,reject)=>{
        if(success) {
            resolve(a);
        }else {
            reject(err);
        }
    })
}

class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined ; 
        this.reason = undefined ;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if(this.status == "pending"){
                this.status = 'resolved';
                this.value = value;
            }
        }
        let reject = (reason) => {
            if(this.status == "pending"){
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        try {
            //
            executor(resolve,reject);
        }catch(err){
            reject(err)
        }
    }

    then(onFufilled,onRejected){
        if(this.status === 'resolved'){
            onFufilled(this.value);
        }
        if(this.status ==='rejected'){
            onRejected(this.reason)
        }
    }
}