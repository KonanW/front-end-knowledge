/* 
  实现new操作符， new Foo() 所实现的事：
  1.继承自 Foo.prototype的对象将会被创建。
  2.使用指定的参数调用Foo。将this绑定到新创建的对象，

  创建一个新对象，继承构造函数原型，调用构造函数实现继承，获取构造函数上的属性。

  1.创建一个空对象
  2.继承构造函数原型
  3.添加属性和方法
  4.新创建的对象由this所引用，并且最后隐式的返回this。
*/

 //eg 

 function Create() {
     var obj = {};
     var con = [].shift.call(arguments);
     obj.__proto__ = con.prototype;
     con.apply(obj,arguments);
     return obj;
 }