/**
 *  promise 简易实现
 */

 class ePromise {
   constructor(fn) {
     //创建三格常量表示状态
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';
    this.state = PENDING;  // 初始化的状态
    this.value = null ;    // 保存回调传入的值
    this.fulfilledcb = [];  // 保存成功时的回调
    this.rejectedcb = [];  // 保存失败时的回调

    try {
      fn(this.fulfilled,this.rejected);
    }catch(e){
      this.rejected(e);
    }
   }
   fulfilled(value) {
    if(this.state === PENDING){//只有pending状态才能进入resolved
      this.state = FULFILLED;
      this.value = value;
      this.fulfilledcb.map(cb => cb(value));
    }
   }
   rejected(value) {
     if(this.state === REJECTED) {
       this.state = REJECTED;
       this.value = value;
       this.rejectedcb.map(cb => cb(value));
     }
   }
 }