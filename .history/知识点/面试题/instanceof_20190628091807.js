/**
 * instanceof 原理是通过原型链的方式来判断的，通过判断 prototype 是否是在 对象的原型链上来判断
 */
 // 判断 obj 是否是 c 的实例 
 function instance (L, C ) {
  var O = C.prototype;
  L = L.__proto__;
  while(true) {
    if(L === null ) {
      return false;
    }
    if( O === L) {
      return true;
    }
    L = L.__proto__;
  }
 }

 function D() {

 }

function A() {

}

 var b = new D();

 console.log(instance(b, A));