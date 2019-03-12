/*  本文将详细讲解promise原理 */

/* 首先  promise是一个状态机  */

var PENDING  = 0;
var FULFILLED = 1;
var REJECTED = 2 ;

function Promise() {
    
    // state 可以是 pending, fulfilled ,rejectd 
    var state = PENDING; 

    var value = null ;

    // success or failure 回调 
    var handlers = [];

    // SUCCESS 回调
    function fulfill(result) {
         state = FULFILLED ;
         value = result;
     }

    // error 回调
    function reject(error) {
         state = REJECTED ;
         value = error;
     }

     /*  检查一个 值是否是 promise  如果是 则返回该promise的then  方法
     *
     *   @param {promise/any}
     *   @param {Function/Null}
     */
     function getThen(value) {
        var t = typeof value;
        if(value && (t === 'object' || t === 'function') ){
            var then = value.then;
            if(typeof then === 'function'){
                return then;
            }
        }
        return null;
     }
     /* 
     **
     **
     */

     function doResolve(fn ,onFulfilled,onRejected) {
         var done = false;
         try {
             fn(function(value){
                 if(done)return
                 done = true
                 onFulfilled(value)
             },function(reason){
                 if(done) return
                 done = true
                 onRejected(reason)
             })
         }catch(ex) {
             if(done) return
             done = true
             onRejected(ex)
         }
     }

     function resolve(result) {
         try {
             var then = getThen(result);
             if(then) {
                doResolve(then.bind(result),resolve,reject);
                return
             }
             fulfill(result);
         }catch(e) {
             reject(e)
         }
     }

     function handler(handler) {
         if(state === PENDING) {
             handlers.push(handler);
         }else {
             if(state === FULFILLED && typeof handler.onFulfilled === 'function') {
                 handler.onFulfilled(value);
             }
             if(state === REJECTED && typeof handler.onRejected === 'function'){
                 handler.onRejected(value);
             }
         }
     }

     this.done = function (onFulfilled,onRejected) {
         setTimeout(() => {
             handler({
                 onFulfilled:onFulfilled,
                 onRejected:onRejected
             });
         }, (0));
     }


     this.then = function (onFulfilled, onRejected) {
        var self = this;
        return new Promise(function (resolve, reject) {
          return self.done(function (result) {
            if (typeof onFulfilled === 'function') {
              try {
                return resolve(onFulfilled(result));
              } catch (ex) {
                return reject(ex);
              }
            } else {
              return resolve(result);
            }
          }, function (error) {
            if (typeof onRejected === 'function') {
              try {
                return resolve(onRejected(error));
              } catch (ex) {
                return reject(ex);
              }
            } else {
              return reject(error);
            }
          });
        });
      }

     doResolve(fn,resolve,reject);
}
