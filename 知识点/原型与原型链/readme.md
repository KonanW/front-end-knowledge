### 继承

js是用原型链的方式实现继承，利用原型让一个引用类型去继承另一个引用类型的属性和方法。

1. 原型链实现继承
首先回顾一下构造函数、原型、实例的关系：

每个构造函数都有一个原型对象，每个原型对象都有一个指向构造函数的指针。而实例有一个指向原型对象的指针。

如果让原型对象等于另一个类型的实例。该原型对象旧包含了指向另一个原型对象的指针，如此形成的原型链。

        function SuperType() {
            this.superProperty = true
        }

        SuperType.prototype.getSuperValue = function() {
            return this.superProperty
        }

        function SubType() {
            this.subType = false
        }

        //继承
        SubType.prototype = new SuperType();

        var instance = new SubType();

        instance.getSuperValue();//  可以访问继承的方法


原型链实现继承的弊端：
   1.引用类型的原型属性会被所有实例共享。
   2.创建子类型的实例时，不能向超类型的构造函数中传参。


2. 构造函数实现继承
   在子类型的构造函数中调用超类型的构造函数

       function Super() {
           this.color = ["red"];
       }

       function Sub() {
           Super.call(this)
       }

       var instance1 = new Sub();
       instance1.color.push('blue');// ["red","blue"]

       var instance2 = new Sub();
       instance2.color; // ["red"]

// 弊端： 无法继承原型上的属性和方法


3.组合继承：
  利用原型链实现对原型上属性和方法的继承，利用构造函数实现对实例属性的继承。

      function Super(name) {
          this.name = name;
          this.color = [];
      }

      Super.prototype.getName = function() {
          return this.name;
      }


      function Sub(name,args) {
          Super.call(this,name);
      }

      Sub.prototype = new Super();

弊端：惠调用两次超类的构造函数。


4. 寄生组合式继承
   用构造函数的方法继承属性，用原型链的混合形式来继承方法。即 不必要通过调用超类的构造函数来指定自类型的原型。只需要一个超类型的原型的副本

        function inheritPrototype(Sub,Super) {
            var prototype = Object(Super.prototype);
            var prototype.constructor = Sub;
            Sub.prototype = prototype;
        }


      function Super(name) {
          this.name = name;
          this.color = [];
      }

      Super.prototype.getName = function() {
          return this.name;
      }


      function Sub(name,args) {
          Super.call(this,name);
      }

      inheritPrototype(Sub,Super);
