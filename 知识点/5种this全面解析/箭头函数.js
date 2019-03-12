/* 
* 一般情况下，this总是指向调用该函数的对象。但是箭头函数不一样，箭头函数是根据词法作用域来决定this.
*  总结如下：
*  1.箭头函数不绑定this，箭头函数中的this相当于普通变量。
*  2.箭头函数的this寻值行为和普通变量相同，在作用域中逐级寻找 
*  3.箭头函数中的this无法通过bind call apply 来直接修改。
*  4.改变作用域中的this的指向可以改变箭头函数的this。 
*/

/* 
    其它说法
    1.箭头函数的this指向外层函数作用域的this。
    2.箭头函数的this是定义函数时所在的上下文中this。
    3.箭头函数体内的 this对象，就是定义时所在的对象，而不是使用时所在的对象。

*/

// 看以下题目

var name ="window"

var person1 = {
    name:'person1',
    show1: function() {
        console.log(this.name);
    },
    show2: () => console.log(this.name),
    show3: function() {
        return function() {
            console.log(this.name)
        }
    },
    show4: function() {
        return () => console.log(this.name);
    }
}

var person2 = {
    name:'person2'
}

/* 解析 谁调用此方法， this指向谁 */
person1.show1() ;// person1   隐式绑定
person1.show1.call(person2) ; ///person2   显示绑定

person1.show2() ; //window  箭头函数绑定 this指向外层作用域
person2.show2().call(person2); //window  箭头函数绑定 this指向外层作用域


person1.show3()()     //window
person1.show3().call(person2)  //person2
person1.show3.call(person2)() //window

person1.show4()()  //person1，箭头函数绑定，this指向外层作用域，即person1函数作用域
person1.show4().call(person2) //person1
person1.show4.call(person2)() //person2 show4的第一层函数指向person2




/* 通过构造函数来创建一个对象，并执行相同的4个方法  */

var name = 'window'

function Person (name) {
    this.name = name;
    this.show1 = function () {
        console.log(this.name);
    }
    this.show2 = () => console.log(this.name);
    this.show3 = function () {
        return function() {
            console.log(this.name) 
        }
    }
    this.show4 = function() {
        return () => console.log(this.name)
    }
}

var personA = new Person('personA');
var personB =  new Person('personB');

personA.show1()  //personA
personA.show1.call(personB) //personB

personA.show2()  // personA
personA.show2.call(personB) //personA

personA.show3()() //window
personA.show3().call(personB) //personB
personA.show3.call(personB)() //personB err  window

personA.show4()()  //window err personA
personA.show4().call(personB)  //window  err personA
personA.show4.call(personB)()  //personB

/* 这里
使用new操作符调用构造函数，会经历以下4个步骤
1.创建一个空对象
2.将构造函数作用域赋给新对象
3.执行构造函数的代码（为这个对象添加属性）
4.返回心对象

*/