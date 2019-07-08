/**
 * 实现一个简易的vue 数据相应式模式
 *
 */
/**
 * 收集依赖的 筐 dev
 */

 class Dep {
   constructor() {
     this.subs = [];
   }

   addDep(watcher) {
     this.subs.push(watcher);
   }
   notify() {
     this.subs.forEach(watcher => {
       watcher.update();
     })
   }
 }

 