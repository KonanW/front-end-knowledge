// 实现一个简易的promise 
/**
 * promise : 包涵 pennding ,resolve, reject 三种状态， 而且只能从 penning  => resolve or reject  ，不可逆转
 */


 class EasyPromise {

   constructor ( fn ) {
      this.status = 'pedding' ;    //初始状态为进行中
      this.value = null;
      this.resolveCb = null ;       // 成功的回调
      this.rejectCb = null;        // 失败的回调

      const resolve = ( value ) => {
        this.resolve( value )
      }

      const reject = value => {
        this.reject(value)
      }
      try {
        fn (resolve, reject);
       }catch(e) {
        reject(e);
       }
   }

   resolve( value ) {
     console.log('resolve');
     if(this.status == 'pedding') {
       this.status = 'resolve' ;
       this.value = value;
       if(this.resolveCb) {
         this.resolveCb(value);
       }
     }  
   }

   reject( value ){
    if(this.status == 'pedding') {
      this.status = 'reject' ;
      this.value = value;
      if(this.rejectCb) {
        this.rejectCb(value);
      }
    } 
   }

 }


 new EasyPromise((resolve, reject) => {
   setTimeout(() => {
    resolve('aaa');
   }, 1000 )
 })