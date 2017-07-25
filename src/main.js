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


Vue.use(VueRouter)

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

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template:`
	<router-view></router-view>
  `
}).$mount('#app-box')
