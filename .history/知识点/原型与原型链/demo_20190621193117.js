function super() {
  var name = "11";
}

super.prototype.call = function() {
  console.log(this.name);
}

function sub() {
 var name = "22";
}

sub.prototype = new super() ; // 原型链的继承

var i =new sub();

sub.call();