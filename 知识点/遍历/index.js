let array = ['a','123',{a:1,b:2}];
array.name = "Demo";

/* for in 除了会遍历数组元素之外，还会遍历数组属性 */
for(let index in array) {
    console.log(`${array[index]}`);
}

for(let value of array) {
    console.log(value)
}