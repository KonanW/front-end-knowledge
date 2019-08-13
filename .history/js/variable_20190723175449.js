// 变量提升与函数提升
// 函数提升的优先级高于变量提升

console.log('a()', a);   // 打印a()
console.log('a', a);     // 打印a()

function a() {
  console.log('1');
}

a = 3;

var a = "b"