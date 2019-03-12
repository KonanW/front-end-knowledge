/* 实现深拷贝的关键点在于 ： 浅拷贝 ＋  递归
  浅拷贝： 创建一个新对象 ，这个新对象有着原始对象属性值的一份精确拷贝，属性值为基本类型。拷贝的是基本类型的值。如果属性值是引用类型，则拷贝的就是内存地址。如果一个对象改变了这个地址，就会影响到另一个对象。
*/

// 浅拷贝

function cloneShallow(source){
    var target = {};
    for(var key in source) {
        if(Object.prototype.hasOwnProperty.call(source,key)){
            target[key] = source[key];
        }
    }
    return target;
}

//test 
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

var  b = cloneShallow(a);
// b.book.price= 20; // 这里修改b，导致a也修改了。
console.log(a);

// deep
/* 
    缺陷：
    1.没有对传入参数校验，传入时为null因改返回null而不是｛｝
    1.没有考虑数组的兼容
    3.对于对象的判断罗技不严谨。 typeog null === 'object';
*/

function cloneDeep(source) {
    var target = {};
    for(var key in source) {
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(typeof source[key] === 'object') {
                target[key] = cloneDeep(source[key]);
            }else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
var deepb = cloneDeep(a);
// console.log(deepb);
deepb.book.price = 20;
console.log(a);


function isObject(obj) {
    //这里 需要保留数组
    return typeof obj === 'object' && obj != null ;
}

//兼容数组
function cloneDeep2(source) {
    if(!isObject(source)) return source ;   //非对象返回自身
    var target  = Array.isArray(source) ? [] : {};
    for(var key in source) {
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(isObject(source[key])){
                target[key] = cloneDeep2(source[key]);
            }else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

//3 循环引用,使用hash或者数组存储已拷贝的对象。检测到当前对象已存在于hash表中，直接取直。

function cloneDeep3(source,hash = new WeakMap()) {
    if(!isObject(source)) return source;
    if(hash.has(source)) return hash.get(source);
    var target = Array.isArray(source) ? [] : {};
    hash.set(source,target);
    for(var key in source) {
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(isObject(source[key])){
                target[key] = cloneDeep2(source[key]);
            }else {
                target[key] = source[key];
            }
        }
    }
    return target;
}


// es5 
function cloneDeep3(source, uniqueList) {

    if (!isObject(source)) return source; 
    if (!uniqueList) uniqueList = []; // 新增代码，初始化数组
      
    var target = Array.isArray(source) ? [] : {};
    
    // ============= 新增代码
    // 数据已经存在，返回保存的数据
    var uniqueData = find(uniqueList, source);
    if (uniqueData) {
        return uniqueData.target;
    };
        
    // 数据不存在，保存源数据，以及对应的引用
    uniqueList.push({
        source: source,
        target: target
    });
    // =============

    for(var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep3(source[key], uniqueList); // 新增代码，传入数组
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

// 新增方法，用于查找
function find(arr, item) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }
    return null;
}
