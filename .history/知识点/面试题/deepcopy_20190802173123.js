
function isObject(source) {
  return typeof source === 'object' && source !== null;
}

function find(list,source){
  for(let i=0; i<list.length; i++) {
    if(list[i].source === source) {
      return list [i];
    }
  }
  return null;
}

function deepcopy(source , list) {
  if(!isObject) return source;
  if(!list) list = [];  
  // var exists = find(list, source);
  // if(exists){
  //   return exists.target;
  // }
  var target = Array.isArray(source) ? [] : {};
  // list.push({
  //   target:target,
  //   source:source,
  // })

  for(key in source) {
    if(Object.prototype.hasOwnProperty.call(source,key)) {
      if(isObject(source[key])) {
        target[key] = deepcopy(source[key], list);
      }else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

var obj = {
  a: '1',
  c: /a/,
  d: {
    data: new Date(),
    sym: Symbol(this.a),
  },
}

obj.b =obj.a;
obj.e = obj.d;

var objb = deepcopy(obj);
console.log(objb)

console.log(objb.b == obj.b)