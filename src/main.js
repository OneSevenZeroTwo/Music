// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick';

import VueRouter from 'vue-router'
import App from './views/App'
import rangeDetails from './views/rangeDetails'
import newSong from './views/newSong'
import range from './views/range'
import songSheet from './views/songSheet'
import singer from './views/singer'
import MuseUI from 'muse-ui';
import VueLazyload from 'vue-lazyload'
import db from './views/db'
import mod from './views/mod' 

Vue.use(MuseUI)

import Vuex from 'vuex'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'

//吴镇宇项目需要引入的子路由
import xtotalist from "./components/ZhenV_RT/xtotallist.vue"

import singlist from "./components/ZhenV_RT/xsinglist.vue"
import 'weui'

import pinyin_dict_notone from "./lib/pinyin_dict_notone.js";

window.pinyin_dict_notone = pinyin_dict_notone;

import "./lib/pinyinUtil.js";




//piny.use(first);

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

// 图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'static/images/404.png',
    loading: 'static/images/404.png',
    attempt: 1
})

// 挂在axios在Vue构造器下
Vue.prototype.$ajax = axios;

// 创建路由
const routes = [{
    path: '/app',
    component: App,
    children: [{
        path: 'newSong',
        component: newSong
    }, {
        path: 'range',
        component: range
    }, {
        path: 'songSheet',
        component: songSheet
    }, {
        path: 'singer',
        component: singer,
        children: [{
            path: 'tolist',
            component: xtotalist
        }, {
            path: '/singlist/:id',
            component: singlist
        }, {
            path: '/app/singer',
            redirect: '/app/singer/tolist'
        }]
    }]
}, {
    path: '/rangeDetails/:id',
    component: rangeDetails,
}, {
    path: '/db',
    component: db,
},{
    path: '/mod/:id',
    component: mod,
},{
    path: '/',
    redirect: '/app/newSong'
}]


// 创建状态管理
var store = new Vuex.Store({
  state:{
    newSong:null,
    newClass:null,
    newDetails:null,
    range_id:null,
    range_page:1,
    imgUrl:'',
    showPlay:false,
    songsPlay:[],
    scrolly:null,
  },
  getters:{
		getRange(state){
			return state.newClass
		},
		getDetails(state){
			return state.newDetails
		},
		giePage(state){
			return state.range_page
		},
    getImgurl(state){
      return state.imgUrl
    },
    showPlay(state){
      return state.showPlay
    },
    songsPlay(state){
      return state.songsPlay
    },
  },
  mutations:{
    getMusic(state){
      axios.get('http://localhost:6787/')
      .then((response) => {
        state.newSong = response.data
        console.log(state.newSong)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    getRange(state){
    	axios.get('/music/rank/list&json=true')
      .then((response) => {
        state.newClass = response.data
      })
      .catch((error) => {
        console.log(error);
      });
    },
    rangeDetails(state){
    	axios.get('/music/rank/info/?rankid='+state.range_id+'&page='+state.range_page+'&json=true',{
//  		params:{
//  			rankid:state.range_id,
//  			rankpage:state.range_page
//			  }
    	})
      .then((response) => {
        state.newDetails = response.data
      })
      .catch((error) => {
        console.log(error);
      });
    },
    setDetails(state, data){
    	state.range_id = data
    },
    setPage(state, data){
    	state.range_page = data
    },
    setImg(state,data){
      state.imgUrl = data[0];
      state.showPlay=data[1]
    },
    setSongs(state,data){
      state.songsPlay= data
    },
  },
  actions:{
    getMusic(context, data) {
      context.commit('getMusic')
    },
    getRange(context, data) {
      context.commit('getRange')
    },
    rangeDetails(context, data) {
      context.commit('rangeDetails')
    },
    setDetails(context, data){
      context.commit('setDetails',data)
    },
    setPage(context, data){
      context.commit('setPage',data)
    },
    setImg(context,data){//点击改变播放控制器的图片
      context.commit("setImg",data)
    },
    setSongs(context,data){
      context.commit("setSongs",data)
    }
  }
})

const router = new VueRouter({
    routes
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
