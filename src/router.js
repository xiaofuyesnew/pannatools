import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import('./views/Makecode.vue'),
      meta: {
        title: '推文代码生成'
      }
    }
  ]
})
