Function.prototype.newApply = function(ctx,params) {
    //防止传空
    ctx  = ctx || window ;
    ctx.fn = this;
    ctx.fn(...params);
    delete ctx.fn;
}