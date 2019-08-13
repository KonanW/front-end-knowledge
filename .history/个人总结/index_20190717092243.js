// call apply bind 

//call
Function.prototype.newCall = function (fn, ...params) {
  let content = this || window;
  fn.symbol = content;
  fn.symbol(...params);
  delete fn.symbol
}