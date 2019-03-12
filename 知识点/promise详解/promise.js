

/* 实现一个简易版的Promise */

//创建三格常量表示状态
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function easyPromise(fn) {
    const that = this;
    that.state = PENDING;
    //value保存成功或者失败传入的值；
    that.value = null;
    that.resolveCb = [];
    that.rejectCb = [];

    /* 
        这两个函数都得判断当前状态是否为等待中。
        state更新后，将传入的值赋值给value
        遍历回调数组并执行
     */
    function resolve(value) {
        // console.log(that.state);
        if(that.state === PENDING){
            that.state = RESOLVED;
            that.value = value;
            that.resolveCb.map(cb => cb(that.value));
        }
    }

    function reject(value) {
        if(that.state === REJECTED){
            that.value = REJECTED;
            that.value = value;
            that.rejectCb.map(cb => cb(that.value));
        }
    }
    /* 执行传入的函数 */
    try {
        fn(resolve,reject)
    }catch(e) {
        reject(e)
    }
}

/* then */
easyPromise.prototype.then = function(onFulfilled,onRejected) {
    const that = this;
    // 判断两个参数是否为函数类型，如果不是，需要创建一个函数赋值给对应的参数，同时也实现了透传
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v =>  v;
    onRejected = typeof onRejected === 'function' ? onRejected: r => { throw r};

    //当状态不是等待态时，就去执行相对应的函数。如果状态是等待态的话，就往回调函数中 push 函数，
    console.log(that.state )
    if(that.state === PENDING) {
        that.resolveCb.push(onFulfilled);
        that.rejectCb.push(onRejected);
        // console.log(this);
    }
    if(that.state === RESOLVED) {
        onFulfilled(that.value);
    }
    if(that.state === REJECTED) {
        onRejected(that.value);
    }
}

//eg
new easyPromise((resolve,reject) => {
    setTimeout(()=> {
        resolve(1)
    },0)
}).then(value => {
    console.log(value);
})