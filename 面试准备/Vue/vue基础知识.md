## 这里放的是Vue项目知识

### vue 生命周期
beforecreated：el 和 data 并未初始化 
    可以在这加个loading事件 
created:完成了 data 数据的初始化，el没有
    在这结束loading，还做一些初始化，实现函数自执行。请求组件需要的数据 
beforeMount：完成了 el 和 data 初始化 
mounted ：完成挂载
    我们可以在个钩子函数里面获取到当前VM，实例化一下三方插件库，例如：swiper,或者是echarts
beforeUpdate: 更新前
updated: 更新完成
beforeDstory: 销毁前状态
    组件销毁前的准备，可以再来这里保存需要的数据（例如用户通过form表单输入的一些数据），
    你确认删除XX吗？
destoryed: 销毁完成状态

### Vue-router
 #### 路由模式
    hash模式：
        后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。另外每次 hash 值的变化，还会触发hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听hashchange来实现更新页面部分内容的操作
    history模式
        多了两个 API，pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求。同时还有 popstate 事件。通过这些就能用另一种方式来实现前端路由了，但原理都是跟 hash 实现相同的。
  ##### history模式下用户刷新，会导致页面向服务器重新请求。---如果不处理的话，就会造成页面404
    两种模式的不同：
        但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。
 #### URL中#号的作用
    是一个锚点

### vue路由钩子
 #### 全局钩子
    路由前置守卫
    router.beforeEach((to, from, next) => {// ...})
        前置守卫应用：在做权限管理系统的时候，可以通过路由元信息，来实现一些权限的判断。例如：我们可以通过路由元信息来标注，那么页面需要登录之后才能进入。在前置守卫中，获取到meta，然后判断meta的值，如果有权限就进入当前页面。如过没有权限，就跳转到指定页面。
    路由后置守卫-------没有next()，不可以改变导航
    router.afterEach(route => { // ...})
 #### 路由独享钩子

    const router = new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Foo,
            beforeEnter: (to, from, next) => {
                // ...
            }
        }
    ]
    })
    
    路由前置守卫
    router.beforeEach((to, from, next) => {// ...})
        前置守卫应用：
    路由后置守卫-------没有next()，不可以改变导航
    router.afterEach(route => { // ...})
 #### 组件内路由钩子
    const Foo = {
    template: `...`,
    beforeRouteEnter (to, from, next) {   -------------如果想要在这个守卫里面获取到组件实例对象，那么就可以通过next回调来获取到当前组件的实例对                                         象
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不能获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建

        beforeRouteEnter 函数内部 this 是undefined，这是因为在执行路由钩子函数beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行组件周期钩子函数beforeCreate。我们可以通过 next 获取组件的实例对象，如：next( (vm)=>{} )，参数vm就是组件的实例化对象。
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
    实例化应用：
        About组件是有二级导航的，在切换二级导航的时候，对应的内容是在变化的；但是about组件是复用的，只会生成一次，切换二级导航的时，如何知道导航在更新呢？
        一个组件有二级导航的时候，点击二级导航的时候导航路径更新了，会触发路由钩子函数beforeRouteUpdate。
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
    }
    }
 #### 路由钩子的实际应用场景
    路由钩子在实际开发中的应用场景
　　路由钩子在实际的开发过程中使用较少, 我在实际的项目中只在组件内使用过beforeRouteLeave, 使用场景分别为一下三类情况：

1、清除当前组件中的定时器

　　当一个组件中有一个定时器时, 在路由进行切换的时候, 可使用beforeRouteLeave将定时器进行清楚, 以免占用内存:
    beforeRouteLeave (to, from, next) {
        window.clearInterval(this.timer) //清除定时器
        next()
    }
2、当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转

    　　如果页面内有重要的信息需要用户保存后才能进行跳转, 或者有弹出框的情况. 应该阻止用户跳转

    复制代码
    beforeRouteLeave (to, from, next) {
    //判断是否弹出框的状态和保存信息与否
        if (this.dialogVisibility === true) {
            this.dialogVisibility = false //关闭弹出框
            next(false) //回到当前页面, 阻止页面跳转
        }else if(this.saveMessage === false) {
        //弹出警告
            next(false) //回到当前页面, 阻止页面跳转
        }else {
            next() //否则允许跳转
        }
    }
    复制代码
3、保存相关内容到Vuex中或Session中

    当用户需要关闭页面时, 可以将公用的信息保存到session或Vuex中
    beforeRouteLeave (to, from, next) {
        localStorage.setItem(name, content); //保存到localStorage中
        next()
    }
### webpack构建优化
https://www.cnblogs.com/giveiris/p/5237080.html
 #### 提取React、jQuery等库文件。它们很少变化，并且到处被复用，应该被提取出来，并且得到长时间的缓存。此处使用插件：WebPack.optimize.CommonsChunkPlugin（WebPack内建插件）
 图片地址： https://images2015.cnblogs.com/blog/295025/201603/295025-20160303001206689-280938108.jpg

 #### 首屏需要的同步加载，首屏过后才需要的则按需加载（异步）

 #### 引入三方组件库文件的时候按需加载

 #### 路由懒加载

### vue项目优化

### vue项目引入JQuery

### MVVM开发模式的理解
    其核心是提供对View 和 ViewModel 的双向数据绑定，这使得ViewModel 的状态改变可以自动传递给 View。

    Vue.js 是一个提供了 MVVM 风格的双向数据绑定的 Javascript 库，专注于View 层。它的核心是 MVVM 中的 VM，也就是 ViewModel。 ViewModel负责连接View 和 Model，保证视图和数据的一致性，这种轻量级的架构让前端开发更加高效、便捷。

    在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。

　　ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM， 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
### Vue的响应式原理

### Vue数据双向绑定
    Vue.js 是采用 Object.defineProperty 的 getter 和 setter，并结合观察者模式来实现数据绑定的。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

### 如何优化SPA应用的首屏加载速度慢的问题？

### 前端如何优化网站性能？

### vue slot 插槽
 #### 插槽

### vue自定义指令
 #### vue自定义