/**
 * 实现一个简易的vue 数据相应式模式
 *
 */

 class Dep {
   constructor() {
     this.subs= []
   }
   addDeps(watch) {
     this.subs.add(watch);
   }
   notify() {
     this.subs.forEach(item => {
       item.update();
     })
   }
 }

 function defineReactive(obj, key, val) {
   const dep = new Dep();
   Object.defineProperty(obj, key,{
      enumerable:true,
      configurable:true,
      get: function defineGetter() {
        dep.addDeps(Dep.target);
        return val;
      },
      set: function defineSetter() {
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
 class Observe {

 }

 class Vue {
   constructor (options) {
     this._data = options.data;
     new Watcher();
   }
 }