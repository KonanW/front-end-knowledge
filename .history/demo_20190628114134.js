
function object(proto) {
  function F() {};
  F.prototype = proto;
  return new F();
}


function Super( name ) {
    this.Supername = name;
}

Super.prototype.getName = function () {
  console.log('Super name:', this.name );
}

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

// Sub.prototype = object(Super.prototype);
// Sub.prototype  = new Super('11');

Sub.prototype.constructor = Sub;

Sub.prototype.getNameAndAge = function() {
  console.log( 'Sub ', this.name, this.age );
}

var instance = new Sub('xiao', 22);

console.log(instance.Supername)