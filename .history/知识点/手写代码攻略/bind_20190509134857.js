/*  
    bind() 方法会创建一个新函数。当这个新函数被调用时，
    bind() 的第一个参数将作为它运行时的 this，
    之后的一序列参数将会在传递的实参前传入作为它的参数。
*/

Function.prototype.bind2 = function(ctx) {
    var self = this;
    // 传递参数
    var args = Array.prototype.slice.apply(arguments,1);
    return function(){
        //执行方法时传入的params
        var outArgs = Array.prototype.slice.apply(arguments,1);
        return self.apply(ctx,outArgs.concats(args));
    }
}


Function.prototyp.newbind(ctx) {
    var self = this;
    var args = Array.prototype.slice.apply(arguments,1);
    return function() {
        var outArgs = Array.prototype.slice.apply(arguments,1);
        return self.apply(ctx,outArgs.concats(args));
    }
}