/* MDN 上slice的polyfill */

/*  slice :  从已有数组中返回指定的元素，该方法不会修改数组。只会返回一个子数组
    @param start 从数组哪个位置开始， －1表示数组的最后一个元素 
    @param end   在该索引处结束提取原数组元素。如果end 省略 或者大于数组长度 ，则提取到原数组末尾

*/

/* 
desc： slice 不会修改原数组，只返回了一个浅拷贝原数组元素的一个新数组。
    1。如果原数组元素是一个对象引用，则新数组的元素也是一个对象引用。如果原对象改变，则原数组和新数组都会改变。
    2，对于string number boolean类型，拷贝到新数组里面。不会影响另一个数组
*/


Array.prototype.slice = function(begin,end) {
    end = (typeof end !=="undefined") ? end : this.length;

    var i,cloned = [],
        size,len = this.length;
    var start = begin || 0;
    start = (start >=0 ) ?start :Math.max(0,len + start);

    var upTo = (typeof end == 'number') ? Math.min(end,len) : len;
    if(end<0) {
        upTo = len + end;
    }
    size = upTo -start;
    if(size > 0) {
        cloned = new Array(size);
        if(this.charAt){
            for(i =0;i<size;i++) {
                cloned[i] = this.charAt(start + i);
            }
        }else {
            for(i =0; i < size; i++) {
                cloned[i] = this[start + i];
            }
        }
    }
    return cloned;
}


/* 类数组转化为数组的几种方法 */

Array.prototype.slice.call(arguments);
//ES6:
Array.from(arguments);
[...arguments];