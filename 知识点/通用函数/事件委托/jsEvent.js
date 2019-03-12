/* js 事件委托 
    利用事件冒泡来管理某一类型的所有事件

*/


var eventUtil = {
    addEvent: function(ele,type,handler) {
        /* dom2事件处理  false表示事件冒泡阶段处理 */
        if(ele.addEventListener){
            ele.addEventListener(type,handler,false);
        /* IE 事件处理 */
        }else if(ele.attachEvent){
            ele.attachEvent("on"+type,handler);
        /* dom  0  */
        }else{
            ele['on'+type] = handler;
        }
    },
    getEvent:function(ev){
        return ev ? ev :window.ev;
    },
    getTarget:function(ev){
        return ev.target || ev.srcElement;
    },
    removeEvent: function(ele,type,handler) {
        if(ele.removeEventListener){
            ele.removeEventListener(type,handler,false)
        }else if(ele.detachEvent){
            ele.detachEvent("on"+type,handle);
        }else {
            ele['on'+type] = null;
        }
    }
}