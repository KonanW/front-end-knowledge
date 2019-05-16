### COMMONJS
作用于服务端，主要应用于node。有四个重要的环境变量：
module require global  exports.实际应用时通过module.exports 定义当前对外输出的接口。采用同步的方式加载

        exports与module.exports的区别：
        exports是module.exports的一个引用。require（）实际上返回的是module.exports而不是exports

### ES6 Module
在服务端和浏览器端通用的模块化方案，由export和import命令

### ES6与CommonJS的差异
1.CommonJS输出的是一个值的拷贝，Es6输出的是值的引用。
 * CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
* ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。


2.CommonJs是运行时加载，ES6是编译时输出接口。在处理循环加载的时候也有本质的区别，commonJs在处理循环加载是只输出已经执行的部分，还未执行的部分不会输出
。Es6 再处理循环加载时，只要引用存在，就会执行
