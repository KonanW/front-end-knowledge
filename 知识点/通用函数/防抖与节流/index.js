

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
