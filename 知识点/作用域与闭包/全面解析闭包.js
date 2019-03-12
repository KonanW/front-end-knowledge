

/* 
 红宝书中关于闭包的定义： 闭包是指有权访问另一个函数作用域中变量的函数
 mdn关于闭包的定义： 闭包是指那些能够访问自由变量的函数，这里自由变量指的是函数参数arguments也不是函数局部变量的变量

*/

/* eg */ 
var scope = "global scope"

function checkscope () {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

var foo = checkscope(); //
foo();

/* 解析：
   1.进入全局代码，创建全局执行上下文，并将全局执行上下文压入执行上下文栈  
   2.全局执行上下文初始化
   3.执行checkscope函数，创建checkscope函数执行上下文，压入执行上下文栈。 
   4.checkscope执行上下文初始化，创建变量对象，作用域链，this等
   5.checkscope执行完毕，弹出
   6.执行f函数，创建f函数执行上下文。压入执行上下文栈。
   7.f执行上下文初始化，创建变量对象、作用域链、this等
   8，f函数执行完毕，f函数上下文从执行上下文弹出。
*/

/* 经典面试题 */

var data = [];
for(var i=0;i<3;i++) {
    data[i] = function() {
        console.log(i);
    }
}

data[0](); //3
data[1](); //3
data[2](); //3

/* 
    解析： 
    循环结束之后，全局执行上下文的VO  是
    globalContext = {
        VO:{
            data:[...],
            i:3
        }
    }
    执行data[0]函数时，data[0]函数的作用域链为：
    data[0]Context = {
        Scope:[AO,globalContext.VO]
    }
*/

/* solution */
var data= []
for(var i =0;i<3;i++) {
    data[i] = (function() {
        return function(){
            console.log(i);
        }
    })
}
data[0]();   //0
data[1]();   //1
data[2]();   //2

/* 解析：
    循环结束时,全局执行上下文没有变化。
    执行data[0]函数的时候，data[0]函数的作用域链发生的改变：
    data[0].context = {
        Scope:[AO,匿名函数context.AO,globalContext.VO]
    }
    匿名函数执行上下文的AO为：
    匿名函数Context = {
        AO : {
            arguments: {
                0:0,
                length:1
            },
            i:0
        }
    }
    印文闭包执行上下文中储存了变量i, 所以根据作用域链能够查找到i ,输出0.
*/