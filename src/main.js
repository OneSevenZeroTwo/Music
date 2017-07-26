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

//
Vue.use(MuseUI)

import Vuex from 'vuex'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
//吴镇宇项目需要引入的子路由
import xtotalist from "./components/ZhenV_RT/xtotallist.vue"
import singlist from "./components/ZhenV_RT/xsinglist.vue"


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

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
					},{
						path: 'singlist/:id',
						component: singlist
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
		path: '/rangeDetails/:id',
  	component:rangeDetails,
	},
	{
		path: '/',
		redirect: '/app/newSong'
	}
]
>>>>>>> 57d4b5a7511566443f97ccbce779ccdf0fd71000

// 创建状态管理
var store = new Vuex.Store({

  state:{
    newSong:null,
    newClass:null,
    newDetails:null,
    range_id:null
  },
  getters:{
		getRange(state){
			return state.newClass
		},
		getDetails(state){
			return state.newDetails
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