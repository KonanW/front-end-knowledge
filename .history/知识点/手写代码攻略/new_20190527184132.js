/* 
  实现new操作符， new Foo() 所实现的事：
  1.继承自 Foo.prototype的对象将会被创建。
  2.使用指定的参数调用Foo。将this绑定到新创建的对象，

  创建一个新对象，继承构造函数原型，调用构造函数实现继承，获取构造函数上的属性。

  1.创建一个空对象
  2.继承构造函数原型
  3.添加属性和方法
  4.新创建的对象由this所引用，并且最后隐式的返回this。
  5.返回值是原始类型则不处理，返回值是对象则正常处理

  mdn 上的解释：
  1.创建一个空对象
  2.链接该对象到另一个对象（继承构造函数原型上的属性和方法）
  3.将新创建的对象作为this的上下文
  4.如果返回的不是对象，则返回this。
*/
    
 //eg 

 function Create() {
     var obj = {};
     var con = [].shift.call(arguments);
     obj.__proto__ = con.prototype;
     var result = con.apply(obj,arguments);
     return result instanceof Object ? result : obj;
 }