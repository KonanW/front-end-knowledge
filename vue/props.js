

/* 
  vue 传值的方法
  
*/

//事件总线 eventBus

// props 向下传递  emit向上传递

//.sync 子组件通过update：name 方式通知父组件更新 2.3新增

//provide  inject  允许祖先组件项所用子孙后台注入一个依赖

//父组件

var porvider = {
    provide: {
        foo:bar
    }
}

// 子组件 诸如 ‘foo

var Child = {
    inject:['foo'],
    created () {
        console.log(this.foo) // => "bar"
      }
}

//$attrs 父组件中所有非props的属性传入 子组件

// listenter :包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。