let array = ['a','123',{a:1,b:2}];
array.name = "Demo";

/**
 * for...in 以任意顺序遍历一个对象自有的、继承的、可枚举的、非symbol属性（MDN定义）
 * 注意 只遍历可枚举的属性，基本包装类型的属性是不可枚举的（Array,Object,Number）
 */
/* for in 遍历数组的时候， 数组的索引是可枚举的 */
for(let index in array) {
    console.log(`${array[index]}`);
}
/* for of  :在一个可迭代对象上创建一个迭代循环，调用自定义迭代钩子

不会循环对象的key 只会循环数组的vale */
for(let value of array) {
    console.log(value)
}