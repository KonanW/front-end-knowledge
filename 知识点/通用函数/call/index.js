/* 实现js中的call方法 
        1.将函数设置为对象的属性。
        2.执行函数。
        3.删除函数。
*/


/* first , 不能接受参数
    2.this可以传null或者undefined，此时this应该指向window
*/
 Function.prototype.call2 = function(ctx) {
     //受限调取call的函数，用this 获取
     ctx.fn = this;
     ctx.fn();
     delete ctx.fn;
 }

 //text

 var foo = {
     value : 1
 }

 function bar() {
     console.log(this.value)
 }
 bar.call2(foo)

Function.prototype.call = function(ctx,...parameter) {
    ctx = ctx || window;
    ctx.fn = this;
    ctx.fn(...parameter);
    delete ctx.fn;
}

Function.prototype.apply = function(ctx,arr) {
    ctx = ctx || window;
    ctx.fn = this;
    if(!arr) {
        ctx.fn()
    }else {
        var args = [];
        ctx.fn(...arr)
    }
    delete ctx.fn
}


/* mdn */
Function.prototype.newCall = function(ctx,...parameter) {
    if( typeof ctx === 'object') {
        ctx = ctx || window
    }else {
        ctx  = Object.create(null);
    }
    let fn = Symbol();
    console.log(ctx);
    ctx[fn] = this;
    console.log(ctx)
    ctx[fn](...parameter);
    delete ctx[fn]
} 

let person = {
    name:"wangmian"
}

function sayHi (age){
    console.log(this.name,age);
}
sayHi.newCall(person,12);