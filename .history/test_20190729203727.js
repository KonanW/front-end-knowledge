function newO() {
  var obj = {};
  var con = Array.prototype.shift.call(arguments);
  obj.__proto__ = con.prototype;
  var result = this.apply(obj,arguments);
  return result instanceof Object ? result : obj;

}

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = newO(Car, 'Eagle', 'Talon TSi', 1993);

console.log(car1.make);