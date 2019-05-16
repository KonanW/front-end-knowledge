

/* 防抖 
   事件触发n秒后在执行，如果n秒内重复触发，则重新计时
*/

function debounce (func,time){
    return function(args) {
        let that  = this;
        let _args = args;
        clearTimeout(func.id);
        func.id = setTimeout(function(){
            fun.call(that,_args)
        },time)
    }
}

//调用 
let demo = debounce(search,500);
demo(ars);


/* 节流  
    规定一段时间内只能触发一次,即使有多次。也只有一次触发

*/

function throttle(fun,delay){
    let last,deferTimer
    return function(args) {
        let that = this;
        let _args = args;
        let now = +new Date()
        if(last && now < last + delay){
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function(){
                last = now;
                fun.apply(that,_args)
            },delay)
        }else {
            last = now;
            fun.apply(that,_args);
        }
    }
}
/* 调用 */
let throttleAjax = throttle(ajax,1000);
throttleAjax(args);



//setTimeout 实现setTimeInterval

function resevice(){
    console.log("");
}


function newSetInterval() {
    resevice();
    setTimeout(()=>{
        newSetInterval()
    },2000)
}


function debounce(fn,delay) {
    // let that = this;
    return function(args) {
        let that = this;
        let _args = args;
        clearTimeout(fn.id);
        fn.id = setTimeout(()=> {
            fn.call(that,_args);
        },delay)
    }

}


let debounceFn = debounce(search,1000);
debounceFn(args);



function debounce2(fn,delay){
    return function(args){
        let _args = args;
        let that = this;
        clearTimeout(fn.id);
        fn.id = setTimeout(()=> {
            fn.call(that,_args);
        },delay)
    }
}


function newCall(ctx,...params){
    ctx  = ctx || window;
    ctx.fn = this;
    ctx.fn(...params);
    delete ctx.fn;
}

function newApply(ctx,params){
    ctx  = ctx || window;
    ctx.fn = this;
    ctx.fn(...params);
    delete ctx.fn;
}

// 放回一个函数
function newBind(ctx){
        let that = this;
        //类数组转成数组
        let args = Array.prototype.slice.apply(arguments,1);

        return function() {
            let outArgs =  Array.prototype.slice.apply(arguments,1);

            return that.apply(ctx,outArgs.concat(args));
        }
}

function newo() {
    let obj = {};
    let con = Array.prototype.shift.call(arguments);
    obj.__proto__ = con.prototype;
    con.apply(obj,arguments);
}



/* 
    slice 方法不会修改原数组
*/

function debounce(fn,delay) {
    return function() {
        let args = [].slice.apply(arguments,1);
        let that  = this;
        clearTimeout(fn.id);
        fn.id = setTimeout(function(){
            fn.apply(that,args);
        },delay);
    }
}

// jsonp
function jsonp(url,params,cb) {
    return new Promise(resolve,reject){
        window[cb] = function(data){
            resolve(data);
            document.body.removeChild(script);
        }

        let args = [];
        for(let key in params){
            args.push(`${key}=${params[key]}`)
        }
        let script = document.createElement('script');
        script.src = url+`?${args.join('&')}`;
        document.body.appendChild(script);
    }
}