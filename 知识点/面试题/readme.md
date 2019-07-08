


### 面试题搜集

1.  attribute和property的区别
     解答：
     property :  dom中的属性，是javascript中的对象
     attribute: html标签上的特性 ， 值为字符串
2. 标准模式 与怪异模式 的区别
   标准模式： 浏览器按照 w3c 标准解析代码
   怪异模式：按照浏览器自己的方式解析代码

   区别：
   盒模型：  ie下 标准模式为  w3c盒模型[content + padding + border + margin ]，怪异模式为 iE盒模型 [content + margin]

   行内元素的垂直对齐： 标准模式为基线，怪异模式对齐至顶部

   怪异模式下 ie6,7,8不支持 ！important 声明
   行内元素的宽高： 标准模式下不生效，怪异模式下 生效

   margin:0 auto 水平居中会在怪异模式下失效


3. async await

        函数执行时 遇到await，会返回，等到触发的异步操作完成之后，再接着执行函数体之后的代码
        
        async function async1() {     
            console.log("async1 start");      
            await  async2();     
            console.log("async1 end");   
        }  
        async  function async2() {    
            console.log( 'async2');  
        } 
        console.log("script start");  
        setTimeout(function () {      
            console.log("settimeout");  
        },0);
        async1();  
        new Promise(function (resolve) {      
            console.log("promise1");      
            resolve();  
        }).then(function () {      
            console.log("promise2"); 
        }); 
        console.log('script end');

        答案：

        script start
        async1 start
        async2
        promise1
        script end 

        async1 end
        promise2
        settimeout

4. vue data 为什要用函数而不是变量
   Vue里面data的属性之所以不能写成对象的格式，是因为对象是对地址的引用，而不是独立存在的。如果一个.vue文件有多个子组件共同接受一个变量的话，改变其中一个子组件的
   内此变量的值，会影响其他组件的这个变量的值，如果写成函数的话，那么他们又一个作用域的概念在里面，相互隔阂，不受影响。

5. vue 运行机制
   引用官网的说明： 数据发生改变，就会经过data处理，然后Dep会发出通知（notify),告诉Watcher有数据发生了变化，接着Watcher会传达给
   渲染函数跟他说有数据变化了，可以渲染视图（数据驱动视图），进而渲染函数执行render方法更新VNODE－虚拟Dom 最后虚拟DOM根据最优算法，
   局部更新需要渲染的视图



### 深拷贝  考虑正则  date

### promise 实现原生ajax
  