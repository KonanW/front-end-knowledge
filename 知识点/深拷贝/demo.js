// 未考虑循环引用

function deepCopy(obj) {
    // if( typeof obj !== 'object' && obj === null){
    //     return obj;
    // }

    let target = Array.isArray(object) ? [] : {};
    for(key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(isObject(obj[key])){
                target[key] = deepCopy(obj[key]);
            }else{
                target[key] = obj[key];
            }
        }
    }
    return target;


    function isObject(obj){
        return typeof obj === 'object' && obj !== null
    }
}

//call 

function newCall(ctx,...params) {
    ctx = ctx || window;
    ctx.fn = this;
    ctx.fn(...params);
    delete ctx.fn;
}
 

// apply 

function newApply(ctx, params) {
    ctx = ctx || window;
    ctx.fn = this;
    ctx.fn(...params);
    delete ctx.fn;
}

//bind 
function newBind(ctx) {
    var self = this;
    // 取出参数
    var args = Array.prototype.slice(arguments,1);
    return function() {
        var inerArgs =  Array.prototype.slice(arguments,1);
        return self.apply(ctx,inerArgs.concat(args));
    }

}

//new 

function new2() {
    var obj = {};
    var con = Array.prototype.slice(arguments,0); // 获得this
    obj.__proto__ = coo.prototype;  //链接到原型
    var ret = con.apply(obj,arguments);     // 绑定this

    return ret instanceof Object ? ret : obj
    // return obj;
}