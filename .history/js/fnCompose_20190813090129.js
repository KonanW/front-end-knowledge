/**
 * 实现一个简单的 compose函数  ，接收若干个函数作为参数，每个函数的执行结果作为下一个函数的输入，直至最后一个函数
 */

 function compose(...fns) {
   return function(){
     return fns.reduceRight(function(arg, fn){
       return fn(arg);
     },arguments);
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
 var result = toUpperAndReverse('jspool');
 console.log(result);