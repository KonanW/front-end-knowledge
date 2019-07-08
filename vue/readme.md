### vue  从初始化到页面渲染过程
对于一个vue文件 ，从调用vue 构造函数的到最后页面渲染结束，到底经历了哪些阶段呢。
接下来将逐步讲述vue 的工作流程。

### initMixin :   core/instance/init.js
初始化vue实例的核心方法。步骤如下
* initLifecycle 
  初始化生命周期，创建父子关系，创建隐含变量。
* initEvents
  初始化事件：在原型上绑定 on  once  off  emit
* initRender
   初始化render函数
* callHooks - beforeCreate
  进入beforeCreate周期
* initInjections
* initState
  初始化 props  methods data Computed watch  数据。
* initProvide
* callHook - created
  进入created
 

 ### 响应式系统   -- core/observer/index.js
  