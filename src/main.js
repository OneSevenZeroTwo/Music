// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick';
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'weui'
import MuseUI from 'muse-ui';
import VueLazyload from 'vue-lazyload'
import pinyin_dict_notone from "./lib/pinyin_dict_notone.js";
import "./lib/pinyinUtil.js";
import com from "./lib/common(模块化).js"


window.com = com;
window.pinyin_dict_notone = pinyin_dict_notone;


import routes from "./router/index.js"
import mainStore from "./store/index.js"


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(MuseUI)


Vue.prototype.$ajax = axios;

// 图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'static/images/404.png',
    loading: 'static/images/404.png',
    attempt: 1
})

// 挂在axios在Vue构造器下
Vue.prototype.$ajax = axios;


// 创建状态管理
var store = new Vuex.Store(mainStore)

const router = new VueRouter({
    routes:routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false


new Vue({
    router,
    store,
    template: `
  <router-view></router-view>
  `
}).$mount('#app-box')
