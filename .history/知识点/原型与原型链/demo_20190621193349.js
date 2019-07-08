function Super(){
  this.name = "11";
}

Super.prototype.call = function() {
  console.log(this.name);
}

function Sub() {
 var name = "22";
}

Sub.prototype = new Super() ; // 原型链的继承

var i =new Sub();

i.call();