// 变量提升与函数提升

console.log('a()', a());
// console.log('a', a);

// var a = 3;
function a() {
  console.log('1');
}