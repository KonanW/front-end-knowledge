// 实现继承 ： 寄生组合式继承 


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