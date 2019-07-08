/**
 *  promise 简易实现
 */

 class ePromise {
   constructor(fn) {
     //创建三格常量表示状态
    
    this.state = 'pending';  // 初始化的状态
    this.value = null ;    // 保存回调传入的值
    this.fulfilledcb = null;  // 保存成功时的回调
    this.rejectedcb = null;  // 保存失败时的回调

    const fulfill = value => {
        this.fulfilled(value);
    }

    const reject = value => {
      this.rejected(value);
    }

    try {
      fn(fulfill,reject);
    }catch(e){
      rejected(e);
    }
   }
   fulfilled(value) {
    if(this.state === 'pending'){//只有pending状态才能进入resolved
      this.state = 'fulfilled';
      this.value = value;
      // this.fulfilledcb.map(cb => cb(value));
      if(this.fulfilledcb) {
        this.fulfilledcb(value);
      }
    }
   }
   rejected(value) {
     if(this.state === 'pending') {
       this.state = 'rejectd';
       this.value = value;
      //  this.rejectedcb.map(cb => cb(value));
      if(this.rejectedcb) {
        this.rejectedcb(value);
      }
     }
   }
   // 未实现链式调用
   then(fulfill,reject) {
       fulfill = typeof fulfill === 'function' ? fulfill : v =>v ;
       reject = typeof reject === 'function' ? reject : r => { throw r };
      if(this.state === 'pending') {
        console.log('pending');
        this.fulfilledcb = fulfill;
        this.rejectedcb = reject;
      }
      if(this.state === 'fulfilled'){
        console.log('ful');

        fulfill(this.value);
      }
      if(this.state === 'rejected') {
        console.log('reject');

        reject(this.value);
      }
      return this;
   }
 }

 new ePromise( (reslove,reject) => {
   setTimeout(() => {
    //  reslove(1);
    reject('err');
   })
 }).then((value) => {
    // reject(value);
    console.log(value);
 },(e) => {
  console.log('enter');
   reject(e);
 })

 