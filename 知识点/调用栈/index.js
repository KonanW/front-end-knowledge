/* 执行上下文的类型
    1.全局执行上下文：只有一个
    2.函数执行上下文：允许多个，函数调用的时候被创建
    3.eval函数执行上下文：运行在eval函数中代码
*/


/* 调用栈：存储在代码执行期间创建的所有执行上下文
   js处理程序的一种机制，一种栈数据结构，能够追踪子程序的运行状态。 
   1.当js调用一个函数，解析器把该函数push到栈中并且执行这个函数。形成一个栈帧。
   2.任何被这个函数调用的函数会被进一步push 到栈中，形成另一个栈帧。
   3.执行完函数，会被从栈中推出
   4.异步函数的回调函数一般都会被添加到一个队列里面。队列的函数需要等到栈空才会push到栈中。如果队列中有其他函数，需要等队列前面的函数被push到栈中才会运行。

*/

//demo 

$.on('button','click',function onClick(){
    setTimeout(function timer(){
        console.log("clicked the button");
    },0);
});

console.log("hi");

setTimeout(function timeOut(){
    console.log("click the button")
},5000);

console.log("myName is chirs");

//解析

/* 
    1.调用绑定事件，push到调用栈中，绑定之后直接推出
    2.调用console,push - call stack  pop
    3.执行setTimeout，过5秒之后添加回调函数到队列里面，如果队列里面没有其他函数，就执行
    4.执行console，
    5.5s之后 settimeout会把回调函数压入队列，调用栈中没有代码执行，执行队列中的函数
*/


