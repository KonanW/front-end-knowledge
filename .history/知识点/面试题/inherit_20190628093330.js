// js 继承的实现方式

/**
 * 原型链继承： 重写原型对象 ，用一个新类型的实例
 * 缺点：
 *   1.多个实例对引用类型的操作会被篡改
 */

 function Animal(value) {
   this.value = value;
 }

 Animal.prototype.getName = function() {
  //  return this.value;
    console.log(this.value)
 }
 Animal.prototype.setName = function(name ) {
   this.value = name;
 }

 // 构建一个字类
 function Cat() {

 }

 Cat.prototype = new Animal('dog') ;

//会继承父类的属性和方法
 var instance  = new Cat();
 var instance2 = new Cat();
 instance.setName('cat');
//  instance.value  
 instance.getName () ; // cat
 instance2.getName () ; // cat

 

