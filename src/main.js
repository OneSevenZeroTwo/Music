// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './views/App'
import newSong from './views/newSong'
import range from './views/range'
import songSheet from './views/songSheet'
import singer from './views/singer'

import MuseUI from 'muse-ui';
//import axios from "axios";
//
Vue.use(MuseUI)

import Vuex from 'vuex'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'



Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

// 挂在axios在Vue构造器下
Vue.prototype.$ajax = axios;

// 创建路由
const routes = [{
  path: '/app',
  component: App,
  children:[{
  	path:'newSong',
  	component:newSong
  },
  {
  	path:'range',
  	component:range
  },
  {
  	path:'songSheet',
  	component:songSheet
  },
  {
  	path:'singer',
  	component:singer
  }]
},
  {
    path:'/',
    redirect:'/app/newSong'
  }]

// 创建状态管理
var store = new Vuex.Store({
  state:{
    newSong:null
  },
  getters:{

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
    }
  },
  actions:{
    getMusic(context, data) {
      context.commit('getMusic')
    }
  }
})

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template:`
	<router-view></router-view>
  `
}).$mount('#app-box')
