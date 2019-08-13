/**
 * 1创建一个空对象；
 * 2.新对象的__proto__等于构造函数的原型
 * 3. this绑定到新对象
 * 4. 返回值为对象的话就返回这个对象
 */


function newO() {
  var obj = {};
  var con = Array.prototype.shift.call(arguments);
  obj.__proto__ = con.prototype;
  var result = con.apply(obj,arguments);
  return result instanceof Object ? result : obj;

}

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = newO(Car, 'Eagle', 'Talon TSi', 1993);

console.log(car1.make);

// bind

Function.prototype.newBind = function(ctx) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var outArgs = Array.prototype.slice.call(arguments, 1);
    return self.apply(ctx, outArgs.concat(args));
  }
}