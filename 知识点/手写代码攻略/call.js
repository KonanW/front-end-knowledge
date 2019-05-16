/* 
 call核心：
   1.将函数设置为对象的属性
   2，执行该函数
   3.删除属性
*/

Function.prototype.newCall = function(ctx,...params) {
    //防止传空
    ctx  = ctx || window ;
    ctx.fn = this;
    ctx.fn(...params);
    delete ctx.fn;
}