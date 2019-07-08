### js运行机制：
    js是单线程的，他是基于事件循环的。

    * 所有同步任务都在主线程上执行，形成一个执行栈
    * 主线程之外还有一个任务队列，只要异步任务有了执行结果，就会在队列中放置一个事件
    * 一旦主线程为空，系统就会读取任务队列，处于等待中的异步任务，进入执行栈，开始执行。
    * 主线程会不断重复以上步骤

首先执行一个 task，如果整个第一轮 event loop，那么整体的 script 就是一个 task，同步执行的代码会直接放进 call stack（调用栈）中，诸如 setTimeout、fetch、ajax 或者事件的回调函数会由 Web APIs 进行管理，然后 call stack 继续执行栈顶的函数。当网络请求获取到了响应或者 timer 的时间到了，Web APIs 就会将对应的回调函数推入对应的 task queues 中。event loop 不断执行，一旦 event loop 中的 current task 为 null，它就回去扫 task queues 有没有 task，然后按照一定规则拿出 task queues 中一个最早入队的回调函数（比如上面提到的以 75% 的几率优先执行鼠标键盘的回调函数所在的队列，但是具体规则我还没找到），取出的回调函数放入上下文执行栈就开始同步执行了，执行完之后检查 event loop 中的 microtask queue 中的 microtask，按照规则将它们全部同步执行掉，最后完成 UI 的重渲染，然后再执行下一轮的 event loop...



intro:
    处于任务队列中的任务分为两种：Marco task 和 micro task ,并且每个macro task 结束后，都要清空所有的micro task.
    常见的macro task : setTimeout , MessageChannel , postMessage,setImmediate
    常见的 micro task : MutationObsever 和 promise.then

### nextTick:
    vue中的nextTick 会被推入到 microtask中。