import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Makecode from './views/Makecode.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/makecode',
      name: 'makecode',
      component: Makecode,
      meta: {
        title: '推文代码生成'
      }
    }
  ]
})
