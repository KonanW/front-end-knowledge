/*  判断是否是数组 */

var toStr = Function.prototype.call.bind(Object.prototype.toString);

function isArray(obj) {
    return toStr(obj) === '[object Array]';
}