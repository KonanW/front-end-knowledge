/* 
 构造函数、原型、实例之间的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针。
                            而实例都包含一个原型对象的指针。
  继承的本质就是复制。  
*/
//1.原型链继承
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

//这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

var instance = new SubType();

console.log(instance.getSuperValue()); // true;

// 原型链方案存在的缺点：多个实例对引用类型的操作会被篡改

function SuperType2() {
    this.colors = ["red","blue","green"];
}

function SubType2() {

}

SubType2.prototype = new SuperType2();

var instance1 = new SubType2();

instance1.colors.push("black");

var instance2 = new SubType2();

instance2.color ; // "red,blue,green,black"



//2.借用构造函数继承

/* 使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类 */

function SuperType3 () {
    this.color = ["red","green","blue"];
}

function SubType3 () {
    SuperType3.call(this);
}

var  instance31 = new SubType3();
instance31.color.push('black');
console.log(instance31.color);//"red,green,blue,black"

var instance32 = new SubType3();
console.log(instance32.color);//"red,green,blue"

/* 缺点：
    只能继承父类的实例属性和方法，不能继承原型属性／方法
    无法实现复用，每个子类都有父类实例函数的副本，影响性能
*/


/* 3组合继承
    用原型链实现对原型属性和方法的继承，用构造函数技术来实现实例属性的继承
*/

function SuperType4(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}

SuperType4.prototype.sayName = function() {
    console.log(this.name);
}

function SubType4(name,age){
    //继承属性
    //第二次调用SuperType4()
    SuperType4.call(this,name);
    this.age = age
}

//继承方法
//构造原型链
//第一次调用SuperType4()
SubType4.prototype = new SuperType4();
//重写subType4.prototype的construtor属性，指向自己的构造函数SubType4
SubType4.prototype.constructor = SubType;
SubType4.prototype.sayAge = function() {
    console.log(this.age);
}

var instance1 = new SubType4("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType4("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27

/* 缺点：
    在使用子类创建实例对象时，其原型中会存在两份相同的属性／方法
*/

/* 4: 原型式继承

    利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型
*/

function object(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}
/* 缺点：
    原型式继承多个实例的引用类型属性之乡相同，存在篡改的可能
    无法传递参数
*/

/* 5 寄生式继承
    在原型式继承上面 增强对象，返回构造函数
*/

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };
  var anotherPerson = createAnother(person);
  anotherPerson.sayHi(); //"hi"
  

  /* 6 寄生组合式继承
        结合借用构造函数传递参数和寄生模式实现继承
        通过借用构造函数来继承属性，通过原型链的混合形式来继承方法。
        这里不必指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。
  */

  function inheritPrototype (SubType, SuperType) {
      var prototype = object(superType.prototype);  //创建对象
      prototype.constructor = SubType;             //增强对象
      SubType.prototype = prototype;               //指定对象
  }