/* 

    bind 实现 
    fun.bind(thisArg[,arg1[,arg2[,...]]])
    thisArg : 调用绑定函数时作为this参数传递给目标函数的值，如果使用new 运算符构造函数，则忽略该值。当使用bind在settimeout中创建一个函数，
              作为thisArg传递的任何原始值都将转化未object，如果没有提供绑定的参数，则执行作用域的this会被视为新函数的thisArg
    bind和aplly,call最大的区别是前者返回了一个绑定上下文的函数 ，后者则直接执行了这个函数。
    bind可以有一下特性：
    1.可以指定this
    2.返回一个函数
    3.可以传入参数
    4.柯里化
*/

Function.prototype.bind = function(oThis){
    if(typeof this !== "function") {
        throw new TypeError("Function.protype.bind - what is trying to be bound is not callable");
    }
    //第一个参数是指定的this，只截取第一个之后的参数
    var aArgs = Array.prototype.slice.call(arguments,1),
        fToBind = this,
        fNop = function () {},
        fBound = function () {
            //当作为构造函数时，this指向实例，当作文普通函数时，this指向window
            return fToBind.apply (
                this instanceof fNop && oThis ? this : oThis || window,
                aArgs.concat(Array.prototype.slice.call(arguments) )
            );
        }
    fNop.prototype = this.prototype;
    fBound.prototype = new fNop();

    return fBound;
}

/* 穷人版 bind */

Function.prototype.bind = Function.prototype.bind || function ( content ){
    var that = this;   //this指向调用者
    return function() {  //返回一个函数
        return that.apply(content,arguments);
    }
}