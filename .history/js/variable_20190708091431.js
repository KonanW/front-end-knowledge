// 变量提升与函数提升

console.log('a()', a);
console.log('a', a);

var a ;

a = function () {
  console.log('1');
}

a = 3;
