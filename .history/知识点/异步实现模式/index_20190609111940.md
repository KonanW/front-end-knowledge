### 异步的发展历程
javascript语言执行环境是单线程的，单线程程序执行的时候，会按照顺序执行，在某个时刻只有指定的代码会执行，而且会阻塞其他的代码。
而异步编程能客服该缺点。

###  回调函数
  首先看一个实例

       function a(fn) {
         setTimeout(()=> {
           fn();
         },0);
         console.log('a);
       }

       function b() {
         console.log('b);
       }
       a(b());
  这里执行的顺序 先 a 后 b.这就是一个最简单的回调函数。


### 发布订阅
主要应用与事件打的监听 ，来看一下发布订阅的基本实现

      class Event {
         constrctor () {
           this.map = { } ; // 用于保存需要监听的事件
         }
         //原型上的方法 ，用添加监听事件,每一个事件名称都包含一个事件数组， emit会触发一系列的事件。
         add(name,fn) {
           if(this.map[name]){
             this.map[name].push(fn);
             return;
           }
           this.map[name] = [fn];
         }
          // 触发
         emit(name,...args) {
           this.map[name].forEach(fn => {
             fn(...args);
           })
         }
      }
  

### promise
promise可以控制代码的流程，promise包涵三种状态： pending（等待中） fulfilled（已完成） rejected（已拒绝）
promise 只能从等待 到  完成 或者拒绝态，  而且不可逆转。并且 完成态和拒绝态不能相互转换。
pormise中then方法返回的也是一个promise，而且then方法接受两个参数，分别是成功和失败的回调.
###  generate


### async await