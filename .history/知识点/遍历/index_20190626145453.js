let array = ['a','123',{a:1,b:2}];
array.name = "Demo";

/**
 * for...in 以任意顺序遍历一个对象自有的、继承的、可枚举的、非symbol属性（MDN定义）
 * 注意 只遍历可枚举的属性
 */
/* for in 除了会遍历数组元素之外，还会遍历数组属性 */
for(let index in array) {
    console.log(`${array[index]}`);
}
/* for of  不会循环对象的key 只会循环数组的vale */
for(let value of array) {
    console.log(value)
}