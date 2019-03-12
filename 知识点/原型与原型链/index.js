/* 1. 普通对象与函数对象 
     凡是通过new Function()创建的对象都是函数对象，其他都是普通对象。
     原型链的形成是真正是靠__proto__ 而非prototype
*/

var o1 = {};
var o2 = new Object();
var o2 = new f1();

function f1(){};
var f2 = function(){};
var f3 = new Function('str','console.log(str)');

typeof Object; //function
typeof Function; //function
typeof f1 ;// function
typeof f2; //function
typeof f3;//function

typeof o1;//object
typeof o2;//object
typeof o3;//object


/* 构造函数 */
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

var person1 = new Person('w',28,'doctor');

// 这里person1是Person的实例，它有一个constructor(构造函数)属性。指向Person
console.log(person1.constructor == Person) // true;实例的构造函数属性（constructor）指向构造函数

/* 原型对象 
    每定义一个对象时候，对象中都会包含一些预定义的属性。其中每个函数对象都有一个prototype属性，这个属性指向他的原型对象。
    这里每个对象都有__proto__属性，但只有函数对象有prototype属性.
    所有的原型对象都会自动获得一个constructor属性，这是一个指针指向prototype属性所在函数
    原型对象是构造函数的实例。
*/

/* __proto__ 

    在创建对象的时候，都会存在一个__proto__属性，指向创建它的构造函数的原型对象。
    eg 
        person1.__proto__ = Person.prototype
        Person.__proto__ = Function.ptototype
        Person.prototype.__proto__ = Object.prototype
        Object.prototype.__proto__ = NUll

*/

