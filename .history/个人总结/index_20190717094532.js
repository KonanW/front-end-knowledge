// call apply bind 

//call
/**
 * call apply 调用一个具有指定this值和参数列表的函数
 * @param {*} ctx 
 * @param  {...any} params 
 */
Function.prototype.newCall = function (ctx, ...params) {
  let ctx = ctx || window;
  ctx.fn = this;
  var result = ctx.fn(...params);
  delete ctx.fn;
  return result;
}

//bind 
/**
 * 返回一个绑定上下文的函数
 */

Function.prototype.newBind(ctx) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const bindArgs = Array.prototype.slice.call(arguments, 1);
    return self.apply(ctx, bindArgs.concat(args));
  }
}