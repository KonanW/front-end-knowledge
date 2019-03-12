/*  this的绑定规则有以下几种：
＊  1.默认绑定
＊  2.隐式绑定
＊  3.显示绑定
＊  4.new绑定
＊  5.箭头函数绑定

*/



/*  1.默认绑定：
    独立函数调用下 this指向window
    严格模式下 this指向undefined

*/

function foo() {
    "use strict"
    // console.log(this.a) // undefined
}

var a = 2;

foo(); // TypeError: a is undefined

//在严格模式下调用函数不会影响默认绑定

var b = 2;

console.log(this.b);  //这里node下全局的this与global对象没有关系 指向module.exports.

function foo2() {
    // var b=3
    console.log(this.b) //注意 这里函数中的this  在node 环境下 指向 全局global对象。
}
foo2();

(function() {
    "use strict"

    foo2() //2
})();


/* 2 隐式绑定 当函数引用有上下文对象，隐式绑定会把this绑定到这个上下文对象上 */

function foo3() {
    console.log(this.c);
}

var obj = {
    c:2,
    foo:foo3
}

obj.foo();   //2

//被隐式绑定的函数特定情况下会丢失绑定对象，应用默认绑定，绑定到全局或者undefined

function foo4() {
    console.log (this.a )
}

var obj2 = {
    a:2,
    foo:foo4
}
var bar = obj2.foo;
var a = "!23"
bar() // "!23"


/* 3 显示绑定 通过call活着apply ，这样调用函数时 将该对象绑定到this*/

function foo5() {
    console.log(this.a2);
}

var obj3 = {
    a2:2
}
foo5.call(obj3) // 2 强制将this 绑定到obj上


/* 4 new绑定 使用new 调用函数 会执行以下步骤
     1.创建一个新对象
     2.新对象会被prototype链接
     3.这个新对象会绑定函数到调用的this
     4.如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。


*/

// 手写一个new实现

function createNew() {
    //  创建一个空对象
    let obj =  new Object();
    // 获得构造函数
    let con = [].shift.call(arguments)
    //链接到原型
    obj.__proto__ = con.prototype
    // 绑定this，执行构造函数
    let result = con.apply(obj,arguments);
    //确保new是一个新对象
     return typeof result === 'object' ? result : obj;
}

function Person() {

}

var person = createNew(Person);


//优先级  new绑定 》 显示绑定 》 隐式绑定 》 默认绑定

