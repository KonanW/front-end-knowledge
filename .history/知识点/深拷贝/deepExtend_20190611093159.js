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