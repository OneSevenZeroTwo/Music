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

/*import App from './views/App'
import rangeDetails from './views/rangeDetails'
import search from './views/search'

import newSong from './views/newSong'
import range from './views/range'
import songSheet from './views/songSheet'
import singer from './views/singer'

//import 'muse-ui/dist/muse-ui.css';

import db from './views/db'
import mod from './views/mod'
import passageDetail from './views/passageDetail'
import song from './views/song'
import connection from './views/connection'
//引入登录注册
import Register from "./views/register.vue";
import Login from "./views/login.vue";
//引入收藏
import Shoucang from "./views/shoucang.vue";
//吴镇宇项目需要引入的子路由
import xtotalist from "./components/ZhenV_RT/xtotallist.vue";
import xsong from "./components/ZhenV_RT/xsong.vue";
import singlist from "./components/ZhenV_RT/xsinglist.vue";
import hotSearch from "./components/search/hotSearch.vue"
import keywordSearch from "./components/search/keywordSearch.vue"*/

import pinyin_dict_notone from "./lib/pinyin_dict_notone.js";
import "./lib/pinyinUtil.js";
import com from "./lib/common(模块化).js"


window.com = com;
window.pinyin_dict_notone = pinyin_dict_notone;


import routes from "./router/index.js"
import mainStore from "./store/index.js"
console.log(mainStore);


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
