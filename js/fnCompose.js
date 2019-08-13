/**
 * 实现一个简单的 compose函数  ，接收若干个函数作为参数，每个函数的执行结果作为下一个函数的输入，直至最后一个函数
 */

 function compose(...fns) {
   return function(x){
     return fns.reduceRight(function(arg, fn){
       return fn(arg);
     },x);
   }
 }

 // 从左至右
 function pipe(...fns) {
   return function(x) {
     return fns.reduce((args, fn) => {
       return fn(args);
     }, x);
   }
 }

 // demo 字符串大写并且逆序

 function stringToUpper(str) {
   return str.toUpperCase();
 }

 function stringReverse(str) {
   return str.split('').reverse().join('');
 }
 var toUpperAndReverse = compose(stringReverse, stringToUpper);
 var toUpperAndReversePipe = pipe(stringToUpper, stringReverse);
 var result = toUpperAndReverse('jspool');
 var result2 = toUpperAndReversePipe('jspool');
 console.log(result2);