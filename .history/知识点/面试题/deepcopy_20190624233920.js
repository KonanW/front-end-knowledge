
function isObject(source) {
  return typeof source === 'object' && source !== null;
}

function find(list,source){
  for(let i=0; i<list.length; i++) {
    if(list[i].target === source) {
      return list [i];
    }
  }
  return null;
}

function deepcopy(source ,list) {
  if(!isObject) return source;
  var target = Array.isArray(source) ? [] : {};
  if(!list) list = [];  
  var exists = find(list,source);
  if(exists){
    return exists.target;
  }
  list.push({
    target:target,
    source:source,
  })

  for(key in source) {
    if(Object.prototype.hasOwnProperty.call(source,key)) {
      if(!isObject(source[key])) {
        target[key] = deepcopy(source[key]);
      }else {
        target[key] = source[key];
      }
    }
  }
  return target;
}