import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import routes from "./router/router";
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter( {
  routes
});


// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app />'
});
