function isObject( value) {
  return typeof value ==='object';
}


function deepCopy( source) {
  if(!isObject(source)) {
      return source;
  }

  var target =  Array.isArray(source) ? [] : {};
  Object.keys(source).forEach((item) => {
      if( isObject(source[item])) {
          target[item] = deepCopy(source[item]);
      }else{
          target[item] = source[item];
      }
  });
  
  return target;
}

var a = {
  b:/abc/,
  book: {
      c:2
  }
};

var b = deepCopy(a);
a.book.c=3;
console.log(JSON.stringify(b));
