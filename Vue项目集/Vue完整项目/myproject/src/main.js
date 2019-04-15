// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import $ from 'jquery'
import './assets/style/reset.css'
import './assets/js/rem.js'
import './tools/utils.js'
import {get,post} from './axios/index.js'
import store from "./vuex/index.js"
Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
