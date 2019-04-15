import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件
import first from '../components/first'
import two from '../components/two'
import three from '../components/three'
import son from '../components/son.vue'
Vue.use(Router);
const router =  new Router({
    routes:[{
        path:"/first",
        name:'first',
        component:first,
        meta:["江磊磊","袁野","施卡"],
        children:[{
            path:"son",
            name:"son",
            component:son,
            meta:["刘柜前","李欠费"]
        }],
        beforeEnter:(to,from,next)=>{
            console.log("我是路由独享守卫");
            console.log(to);
        }
    },{
        path:"/two",
        name:'two',
        component:two
    },{
        path:"/three",
        name:'three',
        component:three
    }],
    mode:"history"
})
// 全局前置路由守卫
router.beforeEach((to,from,next)=>{
    console.log("全局路由前置守卫");
    console.log(to.matched);
    next();
})
// 全局后置路由守卫---不接受next
router.afterEach((to,from)=>{
    console.log('全局路由后置守卫')
})
 export default router