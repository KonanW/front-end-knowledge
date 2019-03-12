/* 
   new 运算符创建一个用户定义的对象类型实例或者具有构造函数的内置对象实例。
   new创建的实例：
   1，可以访问构造函数里面的属性
   2，可以防伪原型里的属性
   new 执行是，会发生以下事情：
   1.继承自Foo.prototype的新对象被创建。
   2，将this绑定到新创建的对象，

   注意：如果构造函数显式返回对象类型，则直接返回这个对象。而不是返回最开始创建的对象。
        如果构造函数没有显式返回对象类型，则返回最开始创建的对象

    new　创建过程：
    1.创建一个空对象obj;
    2.给新对象的内部属性赋值，关键是给[[Prototype]]属性赋值，如果构造函数的原型是Object类型
      则指向构造函数的原型；不然指向Object对象原型。
    3，执行函数Foo，执行过程中内部this指向新对象o；
    4 如果 Foo 内部显式返回对象类型数据，则，返回该数据，执行结束；不然返回新创建的对象 o。

*/

function create() {
    console.log('ar',arguments);
    //创建一个空对象
    var obj = new Object();
    //获得构造函数，arguments中去处第一个参数 ： shift
    var Con = [].shift.call(arguments);
    //链接到原型，obj可以访问到构造函数原型中的属性
    obj.__proto__ = Con.prototype;
    // 绑定this实现继承，obj可以访问到构造函数中属性
    var ret =  Con.apply(obj,arguments);
    return ret instanceof Object ? ret :  obj;
}

/* 构造函数返回值有如下三种情况 
   1.返回一个对象
   2.没有return 即返回undefined
   3.返回undefined以外的基本类型

*/

function Person(name) {
    this.name = name;
    // return {
    //     name:'name'
    // }
}

var a = create(Person,'ww');

console.log(a.name);