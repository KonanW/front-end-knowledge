/* 
    vue 响应式原理：
     通过 Object.defineProperty 为每一个data 添加 getter和setter方法，。这样  data 发生改变触发set，对订阅者回调。
    依赖收集：
    防止在模板中没有用到的数据 发生改变时 重新渲染页面 
    Dep:对data上的属性进行修改会触发setter，取值会触发getter ,所以首次渲染时把所依赖的data会被getter收集到Dep中的subs中去，
    在对data中数据进行修改时 setter只会触发 Dep中subs的函数
  
*/


/* 
   1.避免收集重复依赖
   2.实现深度观测
   3.如何处理数组和其他边界条件
  
*/


function cb(val){
    /*渲染试图  */
    console.log("update");
    console.log(val);
}

function defineReactive(obj,key,val){
    const dep = new Dep();
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get: function ReactiveGetter(){
            /* 将Dep.target（当前watch的对象）存入sub数组中 */
            dep.addSubs(Dep.target);
            return val
        },
        set: function ReactiveSetter(newVal) {
            // this.val = newVal;
            if(newVal === val) return;
            // console.log(newVal);
            /* 通知watcher视图更新 */
            dep.notify();
            // cb(newVal)
        }
    });
}


/* 订阅者
   属性设置的收集依赖到Dep
   属性更新的时候通知依赖 更新数据

*/
class Dep {
    constructor(){
        //  用来存放watch的数组
        this.subs = [];
    }
    //往数组中添加watch对象
    addSubs(watch) {
        this.subs.push(watch);
    }
    /* 通知所有的watch 视图更新 */
    notify(){
        this.subs.forEach((item) => {
            item.update();
        })
    }
}

class Watch {
    constructor(){
        //将观察者本身赋值给全局的target，只有被target标记的才会进行依赖收集
        Dep.target = this;
    }
    /* 更新视图的方法 */
    update(){
        console.log("update");
    }
}

Dep.target = null;

function observer(value) {
    if(!value || (typeof value !== 'object')){
        return;
    }

    Object.keys(value).forEach((key) => {
        defineReactive(value,key,value[key]);
    })
}

class Vue {
    constructor(options){
        this._data = options.data;
        new Watch();
        observer(this._data );

        console.log('render',this._data.test);
    }
}

let o = new Vue({
    data:{
        test:"1123"
    }
});

o._data.test = "234";
