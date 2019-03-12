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


/* 订阅者 */
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
