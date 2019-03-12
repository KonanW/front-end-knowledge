
// 判断是否是一个空对象

function isEmptyObject(obj){
    if(!obj || typeof obj !== "object" || Array.isArray(obj)){
        return false;
    }
    return !Object.keys(object).length;
}