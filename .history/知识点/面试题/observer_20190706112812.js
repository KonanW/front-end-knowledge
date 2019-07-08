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

 // 观察者 
 class Watcher {
  constructor() {
    Dep.target = this;
  }
  update() {
    console.log('update');
  }
 }  

// 设置为响应式 
function defineReactive(obj, key, value) {
  const dep = new Dep();
  Object.defineProperty(obj, key,{
    enumerable:true,
    configurable:true,
    get() {
      dep.addDep(Dep.target);
      return this.value;
    },
    set(value) {
      this.value = value;
      dep.notify();
    }
  })
}
function observer(data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  })
}

class Vue {
  constructor(options) {
    this._data = options.data;
    new Watcher();
    observer(this._data);
    console.log('render',this._data.a);
  }
}

let o = new Vue({
  data: {
    a: '1'
  }
});

o._data.a = '2';
