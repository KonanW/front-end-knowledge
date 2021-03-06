// 实现继承 ： 寄生组合式继承 
import { Class, Function } from '@babel/types/lib';


function Super( name ) {
  this.name = name;
}

Super.prototype.getName = function() {
  console.log(this.name);
}

function Sub(name ,age) {
  // 使用构造函数继承私有属性
  Super.call(this, name);
  this.age = age;
}


//组合式继承  ，  调用了两次父类的构造函数
Sub.prototype = new Super();


function object( proto ) {
  function F() {};
  F.prototype = proto;
  return new F();
}
// 寄生组合是继承
Sub.prototype = object(Super.prototype);


Sub.prototype.constructor = Sub;



// 实现一个深拷贝  。考虑 数组  null 以及循环饮用 

function isObect( obj ) {
  return typeof obj === 'object' && obj !== null;  //去除null
}

// 未考虑 循环引用
function deepCopy( source ) {
  if(!isObect()){
    return source;
  }
  var target = Array.isArray( source ) ? [] : {};
  Object.keys( source ).forEach( key => {
    if( Object.prototype.hasOwnProperty( source, key) ) {
      if( isObect( source[key]) ) { 
        target[key] = deepCopy( source[key] )
      }else {
        target[key] = source[key];
      }
    }
  });
  return target;
}

function find(list, source) {
  list.forEach(item => {
    if(item.source == source) {
      return item;
    }
  })
  return null;
}

function deepCopy2( source, list ) {
  if(!isObect()){
    return source;
  }
  var target = Array.isArray( source ) ? [] : {};
  if(!list) {
    list == [];
  }
  var data = find(list, source);
  if(data) {
    return data.target;
  }
  list.push( {
    source: source,
    target: target;
  })
  
 
  Object.keys( source ).forEach( key => {
    if( Object.prototype.hasOwnProperty( source, key) ) {
      if( isObect( source[key]) ) { 
        target[key] = deepCopy( source[key],list )
      }else {
        target[key] = source[key];
      }
    }
  });
  return target;
}


// 实现一个call  apply   bind

Function.prototype.newCall = function( ctx, ...params ) {
  ctx = ctx || window;
  ctx.fn = this;
  ctx.fn(...params);
  delete ctx.fn;
}

Function.prototype.newApply = function(ctx, params) {
  ctx = ctx || window;
  ctx.fn = this;
  ctx.fn(...params);
  delete ctx.fn;
}

Function.prototype.newBind = function(ctx) {
  var self = this;
  var args = Array.prototype.slice( arguments, 1);
  return function() {
    var args2 = Array.prototype.slice( arguments);
    return self.apply( ctx, args.concat( args2 ));
  }

}

//实现一个 new 操作符  
function newO() {
  var obj = {}; //创造一个空对象
  var con = Array.prototype.shift.call( arguments ); //获取构造函数的this
  obj.__proto__ = con.prototype; // 继承构造函数的原型
  var result = con.apply(this, arguments); //this指向新创建的空对象
  return typeof result == 'object' ? result : obj;  // 
}


// debounce

function debounce( fn, time) {
  let timer;
  return function( args ) {
    if( timer ) {
      clearTimeout( timer )
    }

    timer = setTimeout( () => {
      fn.apply(this, args );
    },time)
  }
}

// 截流

function throttle ( fn, delay) {
  let last = 0;
  return function (agrs) {
    let now = new Date().getTime();
    if(now > last + delay) {
      last = now;
      fn.app(this, agrs);
    }
  }
}

//new Promise 


class newPromise {
  constructor (fn) {
    this.state = 'pedding';
    this.value = null;
    this.resolveCb = null;
    this.rejectCb = null;
    const resolve = ( value ) => {
      this.resolve( value );
    }
    const reject = value => {
      this.reject( value );
    }
    try {
      fn( resolve , reject );
    }catch ( e ) {
      reject ( e );
    }
  }

  resolve ( value ){
    if( this.state == 'pedding') {
      this.state == 'resolve';
      this.value = value;
      this.resolveCb (value);
    }
  }

  reject ( value ) {
    if ( this.state == "pedding" ) {
      this.state == ' reject' ;
      this.value = value;
      thsi.rejectCb ( value )
    }
  }

  then ( resolve ,reject ) {
    resolve = typeof resolve === 'function' ? resolve : v => v;
    reject = typeof reject === 'function' ? reject : v => { throw v }
    if( this.state === 'pedding ') {
      this.rejectCb = reject;
      this.resolveCb = resolve
    }
    if( this.state === 'resolve') {
      this.resolveCb ( this.value )
    }
    if( this.state === 'reject') {
      this.rejectCb ( this.value)
    }
  }
}


// new 

function newO() {
  var obj = {};
  // 获取构造函数
  var con = Array.prototype.shift.call(arguments);
  obj.__proto__  = con.prototype;
  var result = con.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}

// 实现bind

Function.prototype.newBind = function(ctx) {
  var self  = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var outArgs = Array.prototype.slice.call(arguments);
    self.apply(ctx, args.concat(outArgs));
  }
}

//debounce
function debounce(fn, delay) {
  var time = null;
  return function(args) {
    if(time){
      window.clearTimeout(time);
    }
    time = setTimeout(() => {
      fn.apply(this, args);
    },delay);
  }
}

function throttle(fn, delay) {
  let begin,time;
  return function(args) {
    let now = new Date().getTime();
    if(begin && now < begin + delay) {
      if(time) {
         window.clearTimeout(time);
      }
      time = setTimeout(()=> {
        fn.apply(this, args);
      },delay);
    }else {
      begin = now
      fn.apply(this,args);
    }
  }
}


// 8-13 

function newO2 () {
  var obj = {};
  var con = Array.prototype.shift.call(arguments);
  obj.__proto__ = con.prototype;
  var result = cpn.apply(obj,arguments);
  return typeof result === 'object' ? result : obj;
}
