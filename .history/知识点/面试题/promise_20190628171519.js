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
     console.log('resolve:', value);
     if(this.status == 'pedding') {
       this.status = 'resolve' ;
       this.value = value;
       if(this.resolveCb) {
         this.resolveCb(value);
       }
     }  
   }

   reject( value ){
    console.log('reject:', value); 
    if(this.status == 'pedding') {
      this.status = 'reject' ;
      this.value = value;
      if(this.rejectCb) {
        this.rejectCb(value);
      }
    } 
   }
   then( resolve, reject) {
      resolve = typeof resolve == 'function' ? resolve : v =>v ;
      reject = typeof reject == 'function' ? reject : v => { throw v};
      if( this.status  == 'pedding') {
        // 注册回调
        this.resolveCb = resolve;
        this.rejectCb = reject;
        
      }
      if(this.status == "resolve") {
        this.resolveCb(this.value);
      }
      if(this.status == 'reject') {
        this.rejectCb(this.value);
      }
      return this;
   }
  static all( promise ) {
    let result = [];
    return new EasyPromise((resolve , reject) => {
      promise.forEach(element => {
        element.then(res => {
          result.push(res);
        })
      });
      resolve(result);
    })
  }
 }


 new EasyPromise((resolve, reject) => {
   setTimeout(() => {
    reject('aaa');
   }, 1000 )
 }).then((value) => {
  console.log('resolve then', value);
  resolve(value);
 }, (value) => {
   reject(value);
   console.log('reject then', value);
 }).then((value) => {
  console.log('resolve2 then', value);
  resolve(value);
 }, (value) => {
  console.log('resolve2 then', value);
 });