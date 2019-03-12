### 遍历方法 for in 与 for of方法的区别

相同点：都是遍历的的方法
不同点：
+  for in 循环出的key   for of 循环出的是value
+  for in 一般用于对象d属性 而 for of 用于遍历数组
+  for...of不能循环普通的对象，需要通过和Object.keys()搭配使用