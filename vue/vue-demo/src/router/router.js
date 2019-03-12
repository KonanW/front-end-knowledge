// import Router from 'vue-router';
import form from  "../components/form/form.vue";
import display from "../components/display/display.vue"
import index from "../views/index/index.vue"

export default [
            {
                
                 path: '/',
                 redirect: '/index',
            },{
                path:'/form',
                name:'form',
                component:form
            },{
                path:'/displya',
                name:'display',
                component:display
            },{
                path:'index',
                name:'index',
                component:index
            }
        ]