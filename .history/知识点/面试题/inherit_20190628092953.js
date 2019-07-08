// js 继承的实现方式

/**
 * 原型链继承： 重写原型对象 ，用一个新类型的实例
 */

 function Animal(value) {
   this.value = value;
 }

 Animal.prototype.getName = function() {
  //  return this.value;
    console.log(this.value)
 }

 // 构建一个字类
 function Cat() {

 }

 Cat.prototype = new Animal('cat') ;

//会继承父类的属性和方法
 var instance  = new Cat();
//  instance.value  
 instance.getName () ; // cat

