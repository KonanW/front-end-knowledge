 /**
  * 
  * @param {*} obj 
  */
 function isPlanObject(obj) {
   return typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype;
 }
 
 /**
  * 
  * @param {*} target 
  * @param {*} source 
  */
 function deepExtend(target,source) {
    const mix = {};
    Object.keys(target).forEach( k => {
      mix[k] = target[k];
    });
    Object.keys(source).forEach( k => {
      if(isPlanObject(source[k]) && isPlanObject(target[k])){
        mix[k] = deepExtend(target[k],source[k]);
      }else {
        mix[k] = source[k]
      }
    });
    return mix;
 }

 var a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}

var c =deepExtend(b,a);
c.book.price= 20; // 这里修改b，导致a也修改了。
console.log(a);