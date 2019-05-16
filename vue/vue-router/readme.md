

### Vue-router
vue官网路由管理期，实现spa页面无刷新页面跳转

### 路由模式

* hash模式
  使用url hash作为路由，默认模式
  主要是监听URL hash变化实现

        window.addEventListener('hashchange',function(){

        });
* history模式
  依赖history API接口和服务端配置。
         popstate : 监听浏览器历史记录的改变；
         pushstate ： 新建浏览器历史纪录
         replacestate ：修改浏览器历史纪录    
        window.addEventListener('popstate',function(){

         })

### 