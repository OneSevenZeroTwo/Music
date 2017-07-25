import Vue from 'vue'
import Router from 'vue-router'
import App from './views/App'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})
