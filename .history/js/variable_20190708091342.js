// 变量提升与函数提升

console.log('a()', a);
console.log('a', a);

function a() {
  console.log('1');
}

var a = 3;
