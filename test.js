// 首先会在对象的实例属性上查找 ，没有 才会在对象的原型上查找

function A() {
    this.a = 'hi';
    console.log(this.a);
}

A.prototype.a = "hello";
var a = new A();
console.log(a.a);


console.log(1+'2'+'2');
console.log('1'-0+9);
console.log('A'-'B'); // NAN
