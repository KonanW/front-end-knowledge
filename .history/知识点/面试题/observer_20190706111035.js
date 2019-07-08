/**
 * 实现一个简易的vue 数据相应式模式
 *
 */
// 依赖收集的类
 class Dep {
   constructor() {
     this.subs= []
   }
   addDeps(watch) {
     this.subs.add(watch);
   }
   notify() {
     console.log(this.subs);
     this.subs.forEach(item => {
       item.update();
     })
   }
 }
Dep.target = null;

// 数据设置 为响应式
 function defineReactive(obj, key, val) {
   const dep = new Dep();
   Object.defineProperty(obj, key,{
      enumerable:true,
      configurable:true,
      get() {
        console.log('get');
        dep.addDeps(Dep.target);
        return val;
      },
      set() {
        console.log('set');
        dep.notify();
      }
   });
 }

 class Watcher {
   constructor(){
     Dep.target = this;
   }
   update() {
    console.log('update');
   }
 }
 function observer(value) {
  if(!value && typeof value !== 'object'){
    return;
  }
  Object.keys(value).forEach(item => {
      defineReactive(value, item, value[item]);
  })
 }

 class Vue {
   constructor (options) {
     this._data = options.data;
     new Watcher();
     observer(this._data);
   }
 }

 let o = new Vue({
   data: {
     a: "1"
   }
 })


 o._data.a = "2";