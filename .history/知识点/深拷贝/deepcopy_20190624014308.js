

//mianwang 6/24
// 实现一个简易的深拷贝  ，
// 兼容数组 null
// 支持循环引用

function isObject( target ){
  return typeof target ===' object' && target != null;
}

function deepcopy(source) {
  // 兼容 null 和 基本类型
 console.log((typeof source === 'object'));

 if(!isObject( source )) return source;
 //兼容数组

 var target = Array.isArray( source ) ? [] : {};

 for(var key in source) {
   if(Object.prototype.hasOwnProperty.call(source, key)){
     if(isObject(source[key])) {
       target[key] = deepcopy(source[key]);
     }else{
       target[key] = source[key];
     }
   }
 }
 return target;
}

function find(list,source) {
  for(let i = 0;i<list.lenght; i++) {
    if(list[i].source =source){
      return list[i]
    }
  }
  return null;
}


// 支持循环引用 
// 用一个list数组 存储以拷贝的对象 ，
function deepcopy2(source, list) {
  // 兼容 null 和 基本类型
 if(!isObject) return source

 if( !list) list = [] //初始化数组

 var exsitData = find(list, source);
 if(exsitData) {
   //存在拷贝过的对象 直接返回
   return exsitData.target;
 }
 // 保存原数据及对应引用
 list.push({
   target:target,
   source:source
 })

 //兼容数组

 var target = Array.isArray( source ) ? [] : {};

 for(key in source) {
  //  if(Object.prototype.hasOwnProperty(key,source)){
     if(isObject(source[key])) {
       target[key] = deepcopy2(source[key], list);
     }else{
       target[key] = source[key];
     }
  //  }
 }
 return target;
}



//debounce

function debounce(fn, time) {
  return function(args){
    var that = this;
    var _args = args;
    clearTimeout(fn.id);
    setTimeout(()=> {
      fn.call(that,_args);
    },time);
  }
}

var ajax = function() {

}

var deboucefn = debounce(ajax,200);
deboucefn();


var a = {
   book: /ww/,
   price:50,
   other: {
     time: new Date(),
     name:'cc'
   }
};

var b = deepcopy(a);
var c = deepcopy2(a);
a.other.name = 'bb';
console.log(a);
console.log(b);
console.log(c);