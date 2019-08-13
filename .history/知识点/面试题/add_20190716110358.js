// 实现一个累加器  
/**
 * add（1） //1
 * add(1)(2) //3
 * add(1)(2)(3) //6
 */


function add(a) {
  function sum(b) {
    a = a + b;
    return sum;
  };
  sum.toString = function () {
    return a;
  }
  return sum;
}

console.log(add(1));