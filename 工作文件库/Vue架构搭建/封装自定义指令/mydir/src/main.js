// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
// 全局注册一个组件
Vue.directive('myfocus',{
  inserted:function(el){
    // 当被绑定的元素插入到 DOM 中时执行
    el.focus();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
