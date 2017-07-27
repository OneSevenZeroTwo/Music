// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './views/App'
import rangeDetails from './views/rangeDetails'
import newSong from './views/newSong'
import range from './views/range'
import songSheet from './views/songSheet'
import singer from './views/singer'
import MuseUI from 'muse-ui';
import VueLazyload from 'vue-lazyload'

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
			},
			{
				path: 'range',
				component: range
			},
			{
				path: 'songSheet',
				component: songSheet
			},
			{
				path: 'singer',
				component: singer,
				children: [{
						path: 'tolist',
						component: xtotalist
					},
					{
						path: '/app/singer',
						redirect: '/app/singer/tolist'
					}
				]
			}
		]
	},
	{
						path: '/singlist/:id',
						component: singlist
	},
	{
		path: '/rangeDetails/:id',
  	component:rangeDetails,
	},
	{
		path: '/',
		redirect: '/app/newSong'
	}
]


// 创建状态管理
var store = new Vuex.Store({

  state:{
    newSong:null,
    newClass:null,
    newDetails:null,
    range_id:null,
    imgUrl:'../assets/record.png'
  },
  getters:{
		getRange(state){
			return state.newClass
		},
		getDetails(state){
			return state.newDetails
		},
    getImgurl(state){
      return state.imgUrl
    }
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
    	axios.get('http://localhost:5200/')
      .then((response) => {
        state.newClass = response.data
//      console.log(state.newClass.rank.list)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    rangeDetails(state){
    	axios.get('http://localhost:6200/')
      .then((response) => {
        state.newDetails = response.data
//      console.log(state.newDetails.rank.list)
//				console.log(state.range_id)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    setDetails(state, data){
    	state.range_id = data
    },
    setImg(state,data){
      state.imgUrl = data;
      // console.log(state.imgUrl)
    }
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
    setImg(context,data){//点击改变播放控制器的图片
      context.commit("setImg",data)
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
	template: `
	<router-view></router-view>
  `
}).$mount('#app-box')