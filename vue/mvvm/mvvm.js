/* demo for mvvm  */

class Vue {
    constructor(opt){
        this.opt = opt;
        this.observe(opt.data);
        let root = document.querySelector(opt.el);
        this.compile(root);
    }

    /* 为每一个data他绑定一个观察者对象 */
    observe(data){
        Object.keys(data).forEach(key=>{
           let obv = new Observer(); 
           data["_"+key] = data[key];
           //通过getter setter 暴露for循环作用域下的obv . 产生闭包
           Object.defineProperty(data,key,{
               get(){
                   Observer.target && obv.addSubNode(Observer.target);
                   return data['_'+key];
               },
               set(newVal){
                   obv.update(newVal);
                   data['_'+key] = newVal
               }
            })
        })
    }
    /* 遍历dom ，手机每个key变化时，随之调整的位置，以观察者方法存放起来 */
    compile(node){
        [].forEach.call(node.childNodes,child => {
            if(!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)){
                let key = RegExp.$1.trim();
                /* gm 全局 多行匹配 */
                child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'),this.opt.data[key]) ;
                Observer.target = child;
                this.opt.data[key] ;
                Observer.target = null;
            }
            else if (child.firstElementChild) 
                this.compile(child)
        })
    }
}

// 观察者类
class Observer{
    constructor(){
        this.subNode = []
    }
    addSubNode(node) {
        this.subNode.push(node)
    }
    update(newVal){
        this.subNode.forEach(node=>{
            node.innerHTML=newVal
        })
    }
}