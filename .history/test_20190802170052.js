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
/**
 * 
 * @param {*} arguments:传递给函数de参数的 类数组对象 
 */
Function.prototype.newBind = function(ctx) {
  var self = this;
  // 这里第一个参数是需要被绑定的对象
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    // 这里参数已经没有this
    var outArgs = Array.prototype.slice.call(arguments);
    return self.apply(ctx, outArgs.concat(args));
  }
}

//deepCopy

function isObject(obj) {
  return typeof(obj) === 'object' && obj !==null; 
}

// 缓存中查找 
function find(source, unList) {
  unList.forEach(element => {
    if(element.source === source){
      return element;
    }
  });
  return null;
}

function deepCopy(source, unList) {
  if(isObject(source)) {
    return source;
  }
  if(!unList){
    unList = [];
  };
  if(find(source,unList)){
    return 
  }
}