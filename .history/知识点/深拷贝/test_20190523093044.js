/**
 * 深拷贝： 浅拷贝 ＋ 递归
 */ 
//浅拷贝
 function copyShandow(target) {
    let result = {};
    for(let key in target) {
        if(Object.prototype.hasOwnProperty.call(target,key)){
            result[key] = target[key];
        }
    }
    return result;
 }

 // 最简单的深拷贝
 // 缺点 ： 没有校验参数
//           没有兼容数组
//         没有考虑循环引用
 //
 
 function deepCopy(target) {
     let result = {};
     for(let key in target) {
        if(Object.prototype.hasOwnProperty.call(target,key)){
            if(target[key] instanceof Object) {
                result[key] = deepCopy(target[key]);
            }else {
                result[key] = target[key];
            }
        }
     }
     return result;
 }

 //兼容版本1

 function isObject(target) {
     //  需要考虑
     return typeof target === 'object' && target !== null;
 }

 // 兼容数组以及校验参数
 function deepCopy2(target) {
     if(!isObject(target)) {
         return target
     }
     let result = Array.isArray(target) ? [] : {};
     for(let key in target) {
        if( Object.prototype.hasOwnProperty.call(target,key)) {
            if(isObject(target[key])){
                result[key] = deepCopy2(target [key]);
            }else {
                result[key] = target[key];
            }
        }
     }
     return result;
 }

 //  循环引用
function deepCopy3(target, deepList =[]) {
    if(!isObject(target)) {
        return target;
    }
    let result = Array.isArray(target) ? [] : {};

    var uniqueData = find(deepList,target);
    if(uniqueData) return uniqueData.result;

    deepList.push ({
        target: target,
        result:result
    })
    for (let key in target) {
        if(Object.prototype.hasOwnProperty.call(target,key)) {
            if(isObject(target[key])) {
                result[key] = deepCopy3(target[key],deepList);
            }else {
                result[key] = target[key];
            }
        }
    }
    return result;
}
 function find(arr,item) {
     for(let i = 0; i<arr.length; i++) {
         if(arr[i].target == item) {
             return arr [i];
         }
     }
     return null;
 }

 let a = {
     name: "milly",
     book: {
         title: 'this is a book',
         price:55
     }
 }
 a.circ = a;
// let a = null;

//  let b = copyShandow(a);
//  let c = deepCopy(a);
//  let d = deepCopy2(a);
 let e = deepCopy3(a);
 
//  a.book.price = 44;   // 浅拷贝对对象 拷贝的是引用值。

//  console.log(b);
//  console.log(c);
//  console.log(d);
//  console.log(JSON.stringify(e));

 