// js 继承的实现方式

/**
 * 原型链继承： 重写原型对象 ，用一个新类型的实例
 * 缺点：
 *   1.多个实例对引用类型的操作会被篡改
 *   2.子类型上的contructor 被重写了
 *   3. 创造子类型实例无法向父类构造函数传参。
 *   4.给子类型添加原型属性和方法必须在 替换原型之后，因为类型的contructor被重写了
 */

 function Animal(value) {
   this.value = value;
   this.content = {
     type:null,

   }
 }

 Animal.prototype.getName = function() {
  //  return this.value;
    console.log(this.content)
 }
 Animal.prototype.setContent = function(name ) {
   this.content.type = name;
 }

 // 构建一个字类
 function Cat() {

 }

 Cat.prototype.say = function() {
  console.log('miao');
}
 //设置 Cat.prototype 之后 ，constructor 指向了animal 的构造函数 ，不指向 cat
 Cat.prototype = new Animal('dog') ;

 Cat.prototype.constuctor = Cat;


 
//会继承父类的属性和方法
 var instance  = new Cat();
 var instance2 = new Cat();
 instance.setContent('cat');
//  instance.value  
 instance.getName () ; // cat
 instance2.getName () ; // cat

 instance.say();

 /**
  * 寄生组合式继承
  * 
  */

 

