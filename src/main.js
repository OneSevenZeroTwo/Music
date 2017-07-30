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
import 'muse-ui/dist/muse-ui.css';
import VueLazyload from 'vue-lazyload'
import db from './views/db'
import mod from './views/mod'
import passageDetail from './views/passageDetail'
import song from './views/song'
Vue.use(MuseUI)

import Vuex from 'vuex'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'

//吴镇宇项目需要引入的子路由
import xtotalist from "./components/ZhenV_RT/xtotallist.vue";
import xsong from "./components/ZhenV_RT/xsong.vue";
import singlist from "./components/ZhenV_RT/xsinglist.vue";
import 'weui'

import pinyin_dict_notone from "./lib/pinyin_dict_notone.js";

window.pinyin_dict_notone = pinyin_dict_notone;

import "./lib/pinyinUtil.js";




<<<<<<< Updated upstream
//piny.use(first);
=======
//引入登录注册
import Register from "./views/register.vue";
import Login from "./views/login.vue";
>>>>>>> Stashed changes

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$ajax = axios;

// 图片懒加载
Vue.use(VueLazyload, {
<<<<<<< Updated upstream
    preLoad: 1.3,
    error: 'static/images/404.png',
    loading: 'static/images/404.png',
    attempt: 1
=======
	preLoad: 1.3,
	error: 'static/images/404.png',
	loading: 'static/images/404.png',
	attempt: 1
>>>>>>> Stashed changes
})

// 挂在axios在Vue构造器下
Vue.prototype.$ajax = axios;

// 创建路由
const routes = [{
<<<<<<< Updated upstream
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
            path: '/app/singer',
            redirect: '/app/singer/tolist'
        }]
    }]
}, {
    path: '/rangeDetails/:id',
    component: rangeDetails,
}, {
    path: '/singlist/:id',
    component: singlist
}, {
    path: '/xsong/:id',
    component: xsong
}, {
    path: '/db',
    component: db,
}, {
    path: '/mod/:id',
    component: mod,
}, {
    // 文章详情路由
    path: '/passageDetail/:id',
    component: passageDetail,
},{
  path:"/song",
  component:song
}, {
    path: '/',
    redirect: '/app/newSong'
}]
=======
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
					}, {
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
		component: rangeDetails
	},
	//注册登录路由
	{
		path: '/register',
		component: Register
	},
	{
		path: '/login',
		component: Login
	},
	//重定向路由
	{
		path: '/',
		redirect: '/app/newSong'
	}
]
>>>>>>> Stashed changes

// 创建状态管理
var store = new Vuex.Store({
<<<<<<< Updated upstream
    state: {
        newSong: null,
        newClass: null,
        newDetails: null,
        range_id: null,
        range_page: 1,
        songsPlay: [],
        scrolly: null,
        // 播放器数据状态管理
        showPlay: false,
        imgUrl: '',
        isshow: false,
        getIndex: null,
        getMusic: null,
    },
    getters: {
        getRange(state) {
            return state.newClass
        },
        getDetails(state) {
            return state.newDetails
        },
        giePage(state) {
            return state.range_page
        },
        getImgurl(state) {
            return state.imgUrl
        },
        showPlay(state) {
            return state.showPlay
        },
        songsPlay(state) {
            return state.songsPlay
        },
        Index(state) {
            return state.getIndex
        },
        newMusic(state) {
            return state.getMusic
        },
    },
    mutations: {
        getMusic(state) {
            axios.get('http://localhost:6787/')
                .then((response) => {
                    state.newSong = response.data
                    console.log(state.newSong)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getRange(state) {
            axios.get('/music/rank/list&json=true')
                .then((response) => {
                    state.newClass = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        rangeDetails(state) {
            axios.get('/music/rank/info/?rankid=' + state.range_id + '&page=' + state.range_page + '&json=true', {})
                .then((response) => {
                    state.newDetails = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        setDetails(state, data) {
            state.range_id = data
        },
        setPage(state, data) {
            state.range_page = data
        },
        setImg(state, data) {
            state.imgUrl = data[0];
            state.showPlay = data[1]
        },
        setSongs(state, data) {
            state.songsPlay = data
        },
        setIndex(state, data) {
            state.getIndex = data
        },
        setMusic(state, data) {
            axios.get('/music/app/i/getSongInfo.php?cmd=playInfo&hash=' + data)
                .then((response) => {
                    state.getMusic = response.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    actions: {
        getMusic(context, data) {
            context.commit('getMusic')
        },
        getRange(context, data) {
            context.commit('getRange')
        },
        rangeDetails(context, data) {
            context.commit('rangeDetails')
        },
        setDetails(context, data) {
            context.commit('setDetails', data)
        },
        setPage(context, data) {
            context.commit('setPage', data)
        },
        setImg(context, data) { //点击改变播放控制器的图片
            context.commit("setImg", data)
        },
        setSongs(context, data) {
            context.commit("setSongs", data)
        },
        setIndex(context, data) {
            context.commit("setIndex", data)
        },
        setMusic(context, data) {
            context.commit("setMusic", data)
        },
=======

	state: {
		newSong: null,
		newClass: null,
		newDetails: null,
		range_id: null,
		//侧边栏初始化
		direction: 'left',
		telephone:'',
		password:''

	},
	getters: {
		getRange(state) {
			return state.newClass
		},
		getDetails(state) {
			return state.newDetails
		}
	},
	mutations: {
		getMusic(state) {
			axios.get('http://localhost:6787/')
				.then((response) => {
					state.newSong = response.data
					console.log(state.newSong)
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getRange(state) {
			axios.get('http://localhost:5200/')
				.then((response) => {
					state.newClass = response.data
					//      console.log(state.newClass.rank.list)
				})
				.catch((error) => {
					console.log(error);
				});
		},
		rangeDetails(state) {
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
		setDetails(state, data) {
			state.range_id = data
		}
	},
	actions: {
		getMusic(context, data) {
			context.commit('getMusic')
		},
		getRange(context, data) {
			context.commit('getRange')
		},
		rangeDetails(context, data) {
			context.commit('rangeDetails')
		},
		setDetails(context, data) {
			context.commit('setDetails', data)
		}
	}
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
router.beforeEach((to,from,next)=>{
	console.log(123)
})
>>>>>>> Stashed changes
