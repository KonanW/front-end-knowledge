// 连续赋值的例子

var a = {n:1};
var b = a; //持有a,以回查
a.x = a = {n:2};

console.log(a.x) ; // undefined;
console.log(b.x) ; // {n:2}

/* 
对于 解析器 解析 a.x = a = {n:2}时：
 找到 a.x 和a 的指针，已有 则不改变。没有 则创建 并指向空。
 这里 a 已有指针 指向 {n:1}, a.x 没有  指向 null
 接着 再把 a和a.x 同时指向｛n:2｝

*/

/* 执行顺序 */

for(var i =0;i<5;i++){
    setTimeout(() => {
        console.log(new Date,i);
    },1000);
}

console.log(new Date , i);

