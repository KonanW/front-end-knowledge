

### 术语

* promise 
  
  是一个拥有then方法的对象或函数，其行为符合本规范
* thenable
  
  定义了then方法的对象或者函数
* value
  
  任何javascript的合法值
* exception
  
  使用throw语句抛出的一个值
* reason
  
  表示一个promise的拒绝原因

### 要求
* promise的状态
  一个Promise的当前状态必须为以下三种状态中的一种
    * Pending
      等待态 可以迁移至执行态或者拒绝态
    * Fulfilled
      执行态，不能迁移至其他任何状态。必须拥有一个不可变的value
    * Rejected
      拒绝态 不能迁移至其他任何状态 必须拥有一个不可变的reason
* Then方法
  一个promise必须提供一个then方法以访问其当前值、终值（value）和reason，promise的then方法接受两个参数：
      
      promise.then(onFulfilled,onRejected)
 
  这两参数都是可选参数
* onFulfilled 
  promsie 执行结束之后其必须被调用，第一个参数是promise的value。promise执行结束前不可被调用。调用次数不可以超过一次。
* onRejected
  promise被拒绝执行后其必须被调用，第一个参数是promise的reason。promise被拒绝执行前其不可被调用。调用次数补课超过一次
* 调用时机
  onFulfilled和onRejected必须在执行环境堆栈仅包含平台代码时才能被调用
* 调用要求
  onFulfilled和onRejected必须被座位函数调用，即this 指向window或undefined。
* 多次调用
  then方法可以被同一个promise调用多次
* 返回
  then方法必须返回一个promise对象
